"use client";

import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (isLogin) {
      alert("Đăng nhập thành công (demo)");
    } else {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-8 rounded-2xl w-[420px] shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
          {isLogin ? "Đăng Nhập 3aeShop" : "Đăng Ký 3aeShop"}
        </h1>

        {!isLogin && (
          <input
            type="text"
            placeholder="Họ tên"
            className="w-full p-3 mb-3 rounded bg-zinc-800"
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 rounded bg-zinc-800"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full p-3 mb-4 rounded bg-zinc-800"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-bold"
        >
          {isLogin ? "Đăng Nhập" : "Đăng Ký"}
        </button>

        <p className="text-center mt-5 text-sm text-gray-400">
          {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-red-500 cursor-pointer font-bold"
          >
            {isLogin ? "Đăng ký ngay" : "Đăng nhập"}
          </span>
        </p>
      </div>
    </div>
  );
}