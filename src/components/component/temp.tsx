"use client";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "./firebaseConfig";

export function Temp() {
  const [temp, setTemp] = useState("");

  useEffect(() => {
    const fetchTemp = async () => {
      try {
        const tempRef = ref(database, "temp");
        const snapshot = await get(tempRef);
        if (snapshot.exists()) {
          setTemp(snapshot.val());
        }
      } catch (error) {
        console.error("Error fetching temperature data:", error);
      }
    };

    fetchTemp();
  }, []);

  return <p>{temp} °C</p>;
}
