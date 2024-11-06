import express from "express";
import productsRouter from "./routes/products.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;
app.use(express.static(path.join(__dirname, "/client/build")));
app.use(express.json());
app.use("/api/products", productsRouter);

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/build/index.html"))
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
