"use client";
import Image from "next/image";
import Cards from "../assets/Cards.png";
import Chips from "../assets/Chips.png";

interface headerProps {
  title: string;
}

export default function Header({ title }: headerProps) {
  return (
    <div className="flex justify-center flex-row ">
      <Image
        src={Cards}
        alt="Cards"
        width={100}
        height={100}
        className="mx-2"
      />
      <h1 className="flex flex-col items-center text-center font-big-shoulders text-5xl text-[#E4D71B]">
        {title.split(/\s+/).map((word, index) => (
          <span key={`${word}-${index}`}>{word}</span>
        ))}
      </h1>
      <Image
        src={Chips}
        alt="Chips"
        width={100}
        height={100}
        className="mx-2"
      />
    </div>
  );
}
