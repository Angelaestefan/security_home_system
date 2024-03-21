/****************************
 * TITULO: ESP8266 - FIREBASE
 * AUTOR: Equipo 4
 * DESCRIPCION: Configuración y conexión de Arduino NODEMCU8266 y Firebase
 * TC1001B Feb-Junio 2024
 * ***************************/


#include <ESP8266WiFi.h>
#include "FirebaseESP8266.h"
#include <NewPing.h>
#include <DHT.h>
#include <DHT_U.h>
#include <Time.h>
#include <TimeLib.h>

int sensorPin = A0;   
int ledPin = 2;       
int PIN_TRIG = 14;
int PIN_ECHO = 12;
int MIN_DISTANCE = 15;
int BUZZER_PIN = 5;
int MAX_DISTANCE = 200; 


NewPing sonar(PIN_TRIG, PIN_ECHO, MAX_DISTANCE);
DHT dht(D2, DHT11);

// Credenciales wifi
/* 1. Define the WiFi credentials */
#define ssid "Tec-IoT"
#define password "spotless.magnetic.bridge"

/* 2. Define the API Key */
#define API_KEY "AIzaSyA_dgW_8jBnnreXMNmLLps91l1gRZygkbE"

/* 3. Credenciales Proyecto Firebase */
const char *FIREBASE_HOST="https://semanatec-9cc84-default-rtdb.firebaseio.com/"; 
const char *FIREBASE_AUTH="vWG7U2PvJJsgWV24iFFUnTxkJlKDYgCLgjV4mZxi";

// Firebase Data object in the global scope
FirebaseData firebaseData;

bool iterar = true;

void setup()
{
  Serial.begin(115200);
  setTime(9, 50, 00 , 21, 03, 2024);
  Serial.println();
  pinMode(LED_BUILTIN, OUTPUT); 
  pinMode(ledPin, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  dht.begin();

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(250);
  }
  Serial.print("\nConectado al Wi-Fi");
  Serial.println();

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  
  Firebase.reconnectWiFi(true);
}

void loop() {
  int hora = hour();
  int minuto = minute();
  int segundo = second();
  int dia = day();
  int mes = month();
  int anio = year();

  int sensorValue = analogRead(sensorPin);
  int x = map(sensorValue, 0, 100, 0, 1000);

  unsigned int distance = sonar.ping_cm();
  float hume = dht.readHumidity();
  float temp = dht.readTemperature();

  float temp_F = dht.readTemperature(true);

  int h1 = dht.computeHeatIndex(temp, hume);

  
  Serial.println(x);

  Serial.print(distance);
  Serial.println("см");

  if (distance < MIN_DISTANCE) {
    Serial.println("¡Alerta! Objeto detectado a menos de 15 cm.");
    String nhora = String(hora);
    String nmin = String(minuto);
    String nseg = String(segundo);
    String ndia = String(dia);
    String nmes = String(mes);
    String nanio = String(anio);
    String hr = nhora + ":" + nmin + ":" + nseg;
    String fecha = ndia + "/" + nmes + "/" + nanio;
    Serial.print(hr);
    Serial.print("   ");
    Serial.println(fecha);
    Firebase.setString(firebaseData,"hr",hr);
    Firebase.setString(firebaseData,"fecha",fecha);
    digitalWrite(BUZZER_PIN, HIGH);
    delay(15);                      
    digitalWrite(BUZZER_PIN, LOW); 
    
  }
  Firebase.setFloat(firebaseData,"distance",distance);
  Firebase.setFloat(firebaseData,"hume",hume);
  Firebase.setFloat(firebaseData,"sensorValue",sensorValue);
  Firebase.setFloat(firebaseData,"temp",temp);

  Serial.println("Temperatura: " + String(temp) + " Humedad:" + String(hume) );
  Serial.println("Temperatura: " + String(temp_F) + " en Farenheit");
  Serial.println("Sensación térmica " + String(temp_F) + " en Ferenheit");
 // String nodo = "Proyecto-iot";

 // while (iterar)
 // {
  Firebase.getString(firebaseData, "/Led");
  if (firebaseData.stringData()=="1") {
    digitalWrite(ledPin,HIGH);
  }
  else if (firebaseData.stringData()=="0") {
    digitalWrite(ledPin,LOW);
  }
  else{
  }

  delay(500);

} // End Loop