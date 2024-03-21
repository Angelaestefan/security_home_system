import Image from "next/image";
import { Dashboard } from "@/components/component/dashboard";
import { HoraDistance } from "@/components/component/hora_distance";

export default function Home() {
  return (
    <div className="justify-center">
      <Dashboard />
    </div>
  );
}
