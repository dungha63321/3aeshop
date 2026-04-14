export default function Home() {
  const products = [
    {
      name: "ASUS ROG Strix G16",
      price: "32.990.000đ",
    },
    {
      name: "MSI Katana 15",
      price: "28.500.000đ",
    },
    {
      name: "Acer Nitro 5",
      price: "24.990.000đ",
    },
    {
      name: "Lenovo Legion 5",
      price: "35.500.000đ",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="flex justify-between items-center px-10 py-5 border-b border-zinc-800">
        <h1 className="text-4xl font-bold text-red-500">
          3aeShop
        </h1>

        <nav className="flex gap-6 text-lg">
          <a href="/">Trang chủ</a>
          <a href="/products">Sản phẩm</a>
          <a href="/cart">Giỏ hàng</a>
          <a href="/login">Đăng nhập</a>
          <a href="/register">Đăng ký</a>
        </nav>
      </header>

      {/* BANNER */}
      <section className="text-center py-24 bg-gradient-to-r from-red-700 to-black">
        <h2 className="text-6xl font-bold mb-4">
          LAPTOP GAMING ĐỈNH CAO
        </h2>

        <p className="text-2xl mb-8">
          Giảm giá đến 50% toàn bộ sản phẩm tháng này
        </p>

        <a
          href="/products"
          className="bg-white text-black px-8 py-4 rounded-2xl font-bold"
        >
          Mua ngay
        </a>
      </section>

      {/* PRODUCTS */}
      <section className="p-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-red-500">
          Sản Phẩm Nổi Bật
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold">
                {item.name}
              </h3>

              <p className="text-red-400 text-xl mt-2">
                {item.price}
              </p>

              <a
                href="/cart"
                className="inline-block mt-4 bg-red-600 px-5 py-2 rounded-xl"
              >
                Thêm giỏ hàng
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-zinc-800 mt-10">
        © 2026 3aeShop - Laptop Gaming Chính Hãng
      </footer>
    </main>
  );
}