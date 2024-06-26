"use client";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "./firebaseConfig";

export function HoraDistance() {
  const [hora, setHora] = useState("");

  useEffect(() => {
    const fetchHora = async () => {
      try {
        const horaRef = ref(database, "hr");
        const snapshot = await get(horaRef);
        if (snapshot.exists()) {
          setHora(snapshot.val());
        }
      } catch (error) {
        console.error("Error fetching HORA data:", error);
      }
    };

    fetchHora();
  }, []);

  return (
    <div>
      <p>{hora} </p>
    </div>
  );
}
