"use client";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "./firebaseConfig";

export function Hume() {
  const [hume, setHume] = useState("");

  useEffect(() => {
    const fetchHume = async () => {
      try {
        const humeRef = ref(database, "hume");
        const snapshot = await get(humeRef);
        if (snapshot.exists()) {
          setHume(snapshot.val());
        }
      } catch (error) {
        console.error("Error fetching Hume data:", error);
      }
    };

    fetchHume();
  }, []);

  return (
    <div>
      <p>{hume} HR</p>
    </div>
  );
}
