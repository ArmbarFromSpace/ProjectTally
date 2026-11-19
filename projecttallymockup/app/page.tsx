import Header from "@/components/Header";
import Link from "next/link";
export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col p-6 ">
      <Header title={"Tally"} />
      <div>
        <h1 className="text-4xl text-slate-900">Login Page</h1>
      </div>
      <div>
        <p>Username</p>
        <input
          type="text"
          className="border borderrounded bg-slate-200"
          placeholder="Username"
        />
      </div>
      <div>
        <p>Password</p>
        <input
          type="text"
          className="border rounded bg-slate-200"
          placeholder="Password"
        />
      </div>
      <div className="mt-auto flex justify-center">
        <Link href={"/cardCount"}>
          <button className="rounded-md bg-[#3A3A3A] text-[#FFF6F6]">
            Log-In
          </button>
        </Link>
      </div>
    </main>
  );
}
