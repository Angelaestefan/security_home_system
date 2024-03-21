"use client";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "./firebaseConfig";

export function Distance() {
  const [distance, setDistance] = useState("");

  useEffect(() => {
    const fetchDistance = async () => {
      try {
        const distanceRef = ref(database, "distance");
        const snapshot = await get(distanceRef);
        if (snapshot.exists()) {
          setDistance(snapshot.val());
        }
      } catch (error) {
        console.error("Error fetching LED data:", error);
      }
    };

    fetchDistance();
  }, []);

  return (
    <div>
      <p>{distance} m</p>
    </div>
  );
}
