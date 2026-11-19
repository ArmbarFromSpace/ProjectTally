"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  if (pathname === "/cardCount") return null;
  return (
    <div>
      <Link href={`/`}>
        <h1 className="text-xl text-shadow-slate-900">Back</h1>
      </Link>
    </div>
  );
};

export default Header;
