"use client";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "./firebaseConfig";

export function Test() {
  const [led, setLed] = useState("");
  const [distance, setDistance] = useState("");
  const [hume, setHume] = useState("");
  const [sensorValue, setSensorValue] = useState("");
  const [temp, setTemp] = useState("");

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const snapshot = await get(ref(database));
        if (snapshot.exists()) {
          const { Led, distance, hume, sensorValue, temp } = snapshot.val();
          setLed(Led);
          setDistance(distance);
          setHume(hume);
          setSensorValue(sensorValue);
          setTemp(temp);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSensorData();
  }, []);

  return (
    <div>
      <p>Led: {led}</p>
      <p>Distance: {distance}</p>
      <p>Hume: {hume}</p>
      <p>Sensor Value: {sensorValue}</p>
      <p>Temperature: {temp}</p>
    </div>
  );
}
