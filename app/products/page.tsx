export default function Products() {
  const items = [
    "ASUS ROG Strix",
    "MSI Katana",
    "Acer Nitro 5",
    "Lenovo Legion 5",
  ];

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl text-red-500 font-bold mb-10 text-center">
        Sản phẩm
      </h1>

      <div className="grid grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-zinc-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold">{item}</h2>
            <p className="text-red-400 mt-2">25.990.000đ</p>
            <button className="mt-4 bg-red-600 px-4 py-2 rounded-xl">
              Thêm giỏ hàng
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}