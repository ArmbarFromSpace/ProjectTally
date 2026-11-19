import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex-1 justify-between">
      <Link href={`/cardCount`}>
        <button className="font-bitcount">Counter</button>
      </Link>
      <Link href={`/countTrainer`}>
        <button className="font-bitcount">Trainer</button>
      </Link>
    </footer>
  );
};

export default Footer;
