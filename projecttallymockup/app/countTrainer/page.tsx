import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Spade from "@/assets/Spade.png";
import Image from "next/image";
export default function CountTrainer() {
  return (
    <div>
      <Header title={"Mental Trainer"} />
      <div className="flex text-center justify-center">
        <h1 className="bg-[#D9D9D9]/50 rounded-2xl text-5xl font-big-shoulders py-5 px-9 text-[#DAE41B] my-4">
          Show Count
        </h1>
      </div>
      <div className="flex justify-center">
        <Image src={Spade} alt="Ace of Spades" width={100} className="my-3" />
      </div>
      <div className="flex text-center justify-center">
        <h2 className="bg-[#02B732] rounded-2xl text-3xl font-big-shoulders px-5 py-4 my-4">
          Deal Next
        </h2>
      </div>
      <div className="flex text-center justify-center">
        <h2 className="bg-[#FF4444] rounded-2xl text-3xl font-big-shoulders px-5 py-4 my-4">
          Reset Trainer
        </h2>
      </div>

      <Footer />
    </div>
  );
}
