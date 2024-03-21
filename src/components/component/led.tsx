"use client";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "./firebaseConfig";

export function Led() {
  const [led, setLed] = useState("");

  useEffect(() => {
    const fetchLed = async () => {
      try {
        const ledRef = ref(database, "Led");
        const snapshot = await get(ledRef);
        if (snapshot.exists()) {
          setLed(snapshot.val());
        }
      } catch (error) {
        console.error("Error fetching LED data:", error);
      }
    };

    fetchLed();
  }, []);

  return (
    <div>
      <p>{led}</p>
    </div>
  );
}
