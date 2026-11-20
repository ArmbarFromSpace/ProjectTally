"use client";
import Image from "next/image";
import Cards from "../assets/Cards.png";
import Chips from "../assets/Chips.png";

interface headerProps {
  title: string;
}

export default function Header({ title }: headerProps) {
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-3">
      <Image
        src={Cards}
        alt="Cards"
        width={100}
        height={100}
        className="mx-1 h-auto w-10 sm:w-16 md:w-24"
      />
      <h1 className="flex flex-col items-center text-center font-big-shoulders text-3xl leading-none text-[#E4D71B] sm:text-5xl">
        {title.split(/\s+/).map((word, index) => (
          <span key={`${word}-${index}`}>{word}</span>
        ))}
      </h1>
      <Image
        src={Chips}
        alt="Chips"
        width={100}
        height={100}
        className="mx-1 h-auto w-10 sm:w-16 md:w-24"
      />
    </div>
  );
}
