import { ModeToggle } from "@/components/shared/ModeToggler";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-base">Some Text</h1>
      <ModeToggle />
    </main>
  );
}
