"use client";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "./firebaseConfig";

export function HoraDistance() {
  const [hora, setHora] = useState("");

  useEffect(() => {
    const fetchDistance = async () => {
      try {
        const distanceRef = ref(database, "distance");
        const snapshot = await get(distanceRef);
        if (snapshot.exists()) {
          // Extract the 'hora' attribute from the 'distance' object
          const { hora } = snapshot.val();
          setHora(hora);
        }
      } catch (error) {
        console.error("Error fetching distance data:", error);
      }
    };

    fetchDistance();
  }, []);

  return (
    <div>
      <p>Hora:{hora}</p>
    </div>
  );
}
