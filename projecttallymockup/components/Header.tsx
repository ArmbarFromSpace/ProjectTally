"use client";
import Link from "next/link";

interface headerProps {
  title: string;
}

export default function Header() {
  return (
    <div>
      <Link href={`/`}>
        <h1 className="text-xl text-shadow-slate-900">Back</h1>
      </Link>
    </div>
  );
}
