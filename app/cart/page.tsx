export default function Cart() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl text-red-500 font-bold text-center mb-10">
        Giỏ hàng
      </h1>

      <div className="bg-zinc-900 p-8 rounded-2xl">
        <p>ASUS ROG Strix x1</p>
        <p className="mt-2 text-red-400">32.990.000đ</p>

        <button className="mt-6 bg-red-600 px-6 py-3 rounded-xl">
          Thanh toán
        </button>
      </div>
    </main>
  );
}