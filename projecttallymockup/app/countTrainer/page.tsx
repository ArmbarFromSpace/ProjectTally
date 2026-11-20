import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Spade from "@/assets/Spade.png";
import Image from "next/image";
export default function CountTrainer() {
  return (
    <div>
      <Header title={"Mental Trainer"} />
      <div className="flex justify-center text-center">
        <h1 className="my-4 rounded-2xl bg-[#D9D9D9]/50 px-5 py-4 text-3xl font-big-shoulders text-[#DAE41B] sm:px-9 sm:py-5 sm:text-5xl">
          Show Count
        </h1>
      </div>
      <div className="flex justify-center">
        <Image
          src={Spade}
          alt="Ace of Spades"
          width={100}
          className="my-3 h-auto w-20 sm:w-24"
        />
      </div>
      <div className="flex justify-center text-center">
        <h2 className="my-4 rounded-2xl bg-[#02B732] px-4 py-3 text-2xl font-big-shoulders sm:px-5 sm:py-4 sm:text-3xl">
          Deal Next
        </h2>
      </div>
      <div className="flex justify-center text-center">
        <h2 className="my-4 rounded-2xl bg-[#FF4444] px-4 py-3 text-2xl font-big-shoulders sm:px-5 sm:py-4 sm:text-3xl">
          Reset Trainer
        </h2>
      </div>

      <Footer />
    </div>
  );
}
