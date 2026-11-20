import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex-1 justify-between">
      <Link href={`/cardCount`}>
        <button className="font-bitcount bg-[#3A3A3A] rounded-2xl py-1 px-3">
          Counter
        </button>
      </Link>
      <Link href={`/countTrainer`}>
        <button className="font-bitcount bg-[#D9D9D9] rounded-2xl py-1 px-3">
          Trainer
        </button>
      </Link>
    </footer>
  );
};

export default Footer;
