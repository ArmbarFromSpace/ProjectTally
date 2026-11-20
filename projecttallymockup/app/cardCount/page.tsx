import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function CardCount() {
  return (
    <div className="">
      <Header title={"Card Counter"} />
      <div className="mr-auto my-5 flex w-fit max-w-full flex-col items-center rounded-2xl bg-[#D9D9D9]/50 px-8 py-5">
        <h1 className="font-big-shoulders text-7xl text-[#DAE41B]">0</h1>
        <h1 className="font-big-shoulders text-7xl text-[#DAE41B]">
          Current Count
        </h1>
      </div>
      <div className="flex-col my-5 items-center rounded-2xl bg-[#D9D9D9] px-8 text-center"></div>

      <div className="my-5 flex items-start justify-start text-center gap-3">
        <div className="rounded-2xl bg-[#D9D9D9] px-8 py-4 mx-auto">
          <h2 className="text-[#484848] font-big-shoulders text-5xl">-1</h2>
          <h2 className="text-[#484848] font-big-shoulders text-4xl">
            10,J,Q,K,A
          </h2>
        </div>

        <div className="max-w-full w-fit items-start text-center rounded-2xl bg-[#D9D9D9] px-8 py-4 mx-auto">
          <h2 className="text-[#484848] font-big-shoulders text-5xl">-1</h2>
          <h2 className="text-[#484848] font-big-shoulders text-4xl">
            10,J,Q,K,A
          </h2>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <h1 className="font-big-shoulders text-3xl bg-[#7E1F1F]  w-fit px-4 py-2 text-[#FFFFFF] rounded-2xl">
          Reset Count
        </h1>
      </div>

      <Footer />
    </div>
  );
}
