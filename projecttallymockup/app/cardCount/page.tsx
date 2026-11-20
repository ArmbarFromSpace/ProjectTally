import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function CardCount() {
  return (
    <div>
      <Header title={"Card Counter"} />
      <div className="mx-auto my-4 flex w-full max-w-md flex-col items-center justify-center rounded-2xl bg-[#D9D9D9]/50 px-4 py-4 sm:my-5 sm:px-8 sm:py-5">
        <h1 className="font-big-shoulders text-6xl text-[#DAE41B] sm:text-7xl">0</h1>
        <h1 className="text-center font-big-shoulders text-4xl text-[#DAE41B] sm:text-6xl">
          Current Count
        </h1>
      </div>
      <div className="flex-col my-5 items-center rounded-2xl bg-[#D9D9D9] px-8 text-center"></div>

      <div className="my-4 grid w-full grid-cols-2 gap-3 text-center sm:my-5 sm:gap-4">
        <div className="min-w-0 rounded-2xl bg-[#D9D9D9] px-2 py-3 sm:px-4 sm:py-4">
          <h2 className="font-big-shoulders text-4xl text-[#484848] sm:text-5xl">-1</h2>
          <h2 className="font-big-shoulders text-2xl text-[#484848] sm:text-4xl">
            10,J,Q,K,A
          </h2>
        </div>

        <div className="min-w-0 rounded-2xl bg-[#D9D9D9] px-2 py-3 sm:px-4 sm:py-4">
          <h2 className="font-big-shoulders text-4xl text-[#484848] sm:text-5xl">-1</h2>
          <h2 className="font-big-shoulders text-2xl text-[#484848] sm:text-4xl">
            10,J,Q,K,A
          </h2>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <h1 className="w-fit rounded-2xl bg-[#7E1F1F] px-4 py-2 text-2xl font-big-shoulders text-[#FFFFFF] sm:text-3xl">
          Reset Count
        </h1>
      </div>

      <Footer />
    </div>
  );
}
