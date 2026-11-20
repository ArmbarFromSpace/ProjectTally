import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full justify-between">
      <Link href={`/cardCount`}>
        <button className="text-4xl text-[#FFF6F6] font-bitcount bg-[#3A3A3A] rounded-2xl py-4 px-7">
          Counter
        </button>
      </Link>
      <Link href={`/countTrainer`}>
        <button className="text-4xl font-bitcount bg-[#D9D9D9] rounded-2xl py-4 px-7">
          Trainer
        </button>
      </Link>
    </footer>
  );
};

export default Footer;
