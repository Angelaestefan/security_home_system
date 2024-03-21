"use client";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "./firebaseConfig";

export function FechaDistance() {
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const fetchFecha = async () => {
      try {
        const fechaRef = ref(database, "fecha");
        const snapshot = await get(fechaRef);
        if (snapshot.exists()) {
          setFecha(snapshot.val());
        }
      } catch (error) {
        console.error("Error fetching HORA data:", error);
      }
    };

    fetchFecha();
  }, []);

  return (
    <div>
      <p>{fecha} </p>
    </div>
  );
}
