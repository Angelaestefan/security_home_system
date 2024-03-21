"use client";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "./firebaseConfig";

export function Fotoresistencia() {
  const [fotoresistencia, setFotoresistencia] = useState("");

  useEffect(() => {
    const fetchLed = async () => {
      try {
        const fotoresistenciaRef = ref(database, "sensorValue");
        const snapshot = await get(fotoresistenciaRef);
        if (snapshot.exists()) {
          setFotoresistencia(snapshot.val());
        }
      } catch (error) {
        console.error("Error fetching fotoresistencia data:", error);
      }
    };

    fetchLed();
  }, []);

  return (
    <div>
      <p>{fotoresistencia}Lx</p>
    </div>
  );
}
