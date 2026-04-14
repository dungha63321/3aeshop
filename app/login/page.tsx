export default function Login() {
  return (
    <main className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="bg-zinc-900 p-10 rounded-2xl w-[400px]">
        <h1 className="text-4xl text-red-500 font-bold mb-6 text-center">
          Đăng nhập
        </h1>

        <input
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-zinc-800"
        />

        <input
          placeholder="Mật khẩu"
          type="password"
          className="w-full p-3 mb-4 rounded bg-zinc-800"
        />

        <button className="w-full bg-red-600 p-3 rounded-xl">
          Đăng nhập
        </button>
      </div>
    </main>
  );
}