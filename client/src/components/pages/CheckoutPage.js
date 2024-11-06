import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const CheckoutPage = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const handlePayment = () => {
    const success = Math.random() > 0.2; // Randomly simulate success/failure
    navigate("/payment-status", { state: { success } });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Checkout</h2>
      <div style={styles.cartSummary}>
        <h3 style={styles.summaryTitle}>Order Summary</h3>
        {/* This is where you would map through the cart items and display them */}
        <p style={styles.item}>Product 1: $20.00</p>
        <p style={styles.item}>Product 2: $35.00</p>
        <p style={styles.total}>Total: $55.00</p>
      </div>
      <button onClick={handlePayment} style={styles.payButton}>
        Pay Now
      </button>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Full viewport height
    backgroundColor: "#f4f4f4",
    padding: "20px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  cartSummary: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
    marginBottom: "20px",
  },
  summaryTitle: {
    fontSize: "1.5rem",
    marginBottom: "15px",
    color: "#555",
  },
  item: {
    fontSize: "1.2rem",
    margin: "5px 0",
    color: "#333",
  },
  total: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "15px",
    color: "#28a745", // Green color for total
  },
  payButton: {
    backgroundColor: "#007bff", // Blue color for button
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "15px 25px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default CheckoutPage;
