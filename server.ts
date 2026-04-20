import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock Database (In-memory for this demo)
  let products = [
    {
      id: '1',
      name: 'ROG STRIX SCAR 18',
      brand: 'ASUS',
      price: 65990000,
      cpu: 'Core i9-14900HX',
      gpu: 'RTX 4090 16GB',
      ram: '32GB DDR5',
      storage: '2TB SSD',
      display: '18" QHD+ 240Hz',
      image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&q=80&w=1200',
      description: 'The pinnacle of gaming performance with extreme cooling.',
      isFeatured: true
    },
    {
      id: '2',
      name: 'MSI RAIDER GE78 HX',
      brand: 'MSI',
      price: 58500000,
      cpu: 'Core i9-13980HX',
      gpu: 'RTX 4080 12GB',
      ram: '32GB DDR5',
      storage: '1TB SSD',
      display: '17" QHD+ 240Hz',
      image: 'https://images.unsplash.com/photo-1593642702821-c8da63c1f77e?auto=format&fit=crop&q=80&w=1200',
      description: 'Futuristic design with stellar RGB integration.',
      isFeatured: true
    },
    {
      id: '3',
      name: 'PREDATOR HELIOS NEO 16',
      brand: 'Acer',
      price: 32990000,
      cpu: 'Core i7-13700HX',
      gpu: 'RTX 4060 8GB',
      ram: '16GB DDR5',
      storage: '512GB SSD',
      display: '16" WQXGA 165Hz',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1200',
      description: 'Power through the toughest battles with zero heat.',
      isFeatured: false
    },
    {
      id: '4',
      name: 'ALIENWARE M16 R2',
      brand: 'Dell',
      price: 45000000,
      cpu: 'Core i9-14900HX',
      gpu: 'RTX 4070 8GB',
      ram: '16GB DDR5',
      storage: '1TB SSD',
      display: '16" QHD+ 240Hz',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
      description: 'Iconic legend design meets raw gaming power.',
      isFeatured: true
    },
    {
      id: '5',
      name: 'LEGION PRO 7I',
      brand: 'Lenovo',
      price: 42000000,
      cpu: 'Core i9-13900HX',
      gpu: 'RTX 4080 12GB',
      ram: '32GB DDR5',
      storage: '1TB SSD',
      display: '16" WQXGA 240Hz',
      image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=1200',
      description: 'Sleek professional look with deadly performance inside.',
      isFeatured: false
    }
  ];

  let orders: any[] = [];

  // API Routes
  app.get("/api/products", (req, res) => {
    res.json(products);
  });

  app.post("/api/products", (req, res) => {
    const newProduct = { ...req.body, id: Date.now().toString() };
    products.push(newProduct);
    res.status(201).json(newProduct);
  });

  app.put("/api/products/:id", (req, res) => {
    const { id } = req.params;
    products = products.map(p => p.id === id ? { ...p, ...req.body } : p);
    res.json(products.find(p => p.id === id));
  });

  app.delete("/api/products/:id", (req, res) => {
    const { id } = req.params;
    products = products.filter(p => p.id !== id);
    res.status(204).send();
  });

  // Orders API
  app.get("/api/orders", (req, res) => {
    res.json(orders);
  });

  app.post("/api/orders", (req, res) => {
    const newOrder = {
      ...req.body,
      id: `ORD-${Date.now()}`,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
  });

  app.put("/api/orders/:id/status", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    orders = orders.map(o => o.id === id ? { ...o, status } : o);
    res.json(orders.find(o => o.id === id));
  });

  // Auth Mock
  app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    if (email === "admin@3aeshop.com" && password === "admin123") {
      res.json({
        user: { id: "admin", email: "admin@3aeshop.com", role: "admin", name: "Admin 3ae" },
        token: "mock-jwt-token-admin"
      });
    } else if (password === "user123") {
       res.json({
        user: { id: "user", email, role: "user", name: "Gamer Fan" },
        token: "mock-jwt-token-user"
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
