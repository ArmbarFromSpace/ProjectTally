import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-4 flex w-full gap-3">
      <Link className="flex-1" href={`/cardCount`}>
        <button className="w-full whitespace-nowrap rounded-2xl bg-[#3A3A3A] px-1 py-2 text-lg font-bitcount text-[#FFF6F6] sm:px-4 sm:py-3 sm:text-3xl md:px-7 md:py-4 md:text-4xl">
          Counter
        </button>
      </Link>
      <Link className="flex-1" href={`/countTrainer`}>
        <button className="w-full whitespace-nowrap rounded-2xl bg-[#D9D9D9] px-1 py-2 text-lg font-bitcount sm:px-4 sm:py-3 sm:text-3xl md:px-7 md:py-4 md:text-4xl">
          Trainer
        </button>
      </Link>
    </footer>
  );
};

export default Footer;
