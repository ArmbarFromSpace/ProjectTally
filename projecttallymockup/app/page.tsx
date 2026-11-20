import Header from "@/components/Header";
import Link from "next/link";
export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col p-6 ">
      <Header title={"Tally"} />
      <div className="flex flex-col items-center gap-8">
        <div className="flex w-64 flex-col items-start gap-2">
          <p className="text-2xl text-white font-bitcount">Username or Email</p>
          <input
            className="w-64 rounded-2xl border bg-slate-200 px-2 py-2"
            placeholder="Username"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="text-2xl text-white font-bitcount">Password</p>
          <input
            type="text"
            className="w-64 border rounded-2xl px-2 py-2 bg-slate-200"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="mx-auto mt-auto my-auto flex w-80 flex-col gap-4">
        <div className="flex items-center justify-between text-[#FFF6F6] font-bitcount">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>
          <span>Forgot Password</span>
        </div>
        <Link href="/cardCount" className="w-full">
          <button className="w-full rounded-3xl py-5 text-3xl font-bitcount bg-[#3A3A3A] text-[#FFF6F6]">
            Log-In
          </button>
        </Link>
        <p className="font-bitcount text-sm">
          <span className="text-[#FFF6F6] mx-1">Don't have an account?</span>
          <span className="text-[#FF0004]">Sign-Up</span>
        </p>
      </div>
    </main>
  );
}
