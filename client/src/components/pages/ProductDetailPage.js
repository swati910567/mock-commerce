import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);
  const handleAddToCart = () => {
    // Simulate payment outcome
    const success = Math.random() > 0.5; // Random success or failure
    // Navigate to PaymentStatusPage with payment outcome
    navigate("/payment-status", { state: { success } });
  };
  if (!product) return <div style={styles.loading}>Loading...</div>;

  return (
    <div style={styles.container}>
      <div style={styles.productCard}>
        <h2 style={styles.productName}>{product.name}</h2>
        <p style={styles.productDescription}>{product.description}</p>
        <button style={styles.addToCartButton} onClick={handleAddToCart}>
          Add to Cart
        </button>{" "}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    backgroundColor: "#f4f4f4",
    padding: "20px",
  },
  productCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    maxWidth: "400px",
    textAlign: "center",
  },
  productName: {
    fontSize: "2rem",
    margin: "0 0 20px",
    color: "#333",
  },
  productDescription: {
    fontSize: "1.2rem",
    margin: "0 0 30px",
    color: "#666",
  },
  addToCartButton: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "15px 25px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  loading: {
    fontSize: "1.5rem",
    textAlign: "center",
    marginTop: "20%",
  },
};

export default ProductDetailPage;
