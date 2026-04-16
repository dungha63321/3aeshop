"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = () => {
    if (isLogin) {
      alert("Đăng nhập thành công");
    } else {
      alert("Đăng ký thành công");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-8 rounded-2xl w-[420px]">
        <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
          {isLogin ? "Đăng Nhập 3aeShop" : "Đăng Ký 3aeShop"}
        </h1>

        {!isLogin && (
          <input
            type="text"
            placeholder="Họ tên"
            className="w-full p-3 mb-3 rounded bg-zinc-800"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 rounded bg-zinc-800"
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full p-3 mb-4 rounded bg-zinc-800"
        />

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-bold cursor-pointer"
        >
          {isLogin ? "Đăng Nhập" : "Đăng Ký"}
        </button>

        <p
          className="text-center mt-5 text-red-500 cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Chưa có tài khoản? Đăng ký"
            : "Đã có tài khoản? Đăng nhập"}
        </p>
      </div>
    </div>
  );
}