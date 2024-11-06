import fetch from "node-fetch"; // Import node-fetch to use fetch in Node.js

export const getAllProducts = async (req, res) => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Error fetching products");
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${req.params.id}`
    );
    if (!response.ok) {
      return res.status(404).send("Product not found");
    }
    const product = await response.json();
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).send("Error fetching product");
  }
};
