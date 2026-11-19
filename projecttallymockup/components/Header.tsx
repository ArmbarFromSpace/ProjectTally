"use client";
import Image from "next/image";
import Cards from "../assets/Cards.png";
import Chips from "../assets/Chips.png";

interface headerProps {
  title: string;
}

export default function Header({ title }: headerProps) {
  return (
    <div>
      <Image src={Cards} alt="Cards" width={100} height={100} />
      <h1 className="text-xl text-shadow-slate-900">{title}</h1>
      <Image src={Chips} alt="Chips" width={100} height={100} />
    </div>
  );
}
