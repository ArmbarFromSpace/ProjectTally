export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6 justify-center">
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
    </main>
  );
}
