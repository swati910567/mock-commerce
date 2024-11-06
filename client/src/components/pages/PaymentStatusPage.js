import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentStatusPage = () => {
  const location = useLocation();
  const success = location.state?.success;

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleProductsClick = () => {
    navigate("/products");
  };

  if (success === undefined) {
    return <div style={styles.error}>Error: Payment status not found.</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        {success ? "Payment Successful!" : "Payment Failed!"}
      </h2>
      {success ? (
        <p style={styles.message}>Thank you for your purchase!</p>
      ) : (
        <p style={styles.message}>Please try again.</p>
      )}
      <div style={styles.buttonContainer}>
        <button onClick={handleHomeClick} style={styles.button}>
          Home
        </button>
        <button onClick={handleProductsClick} style={styles.button}>
          Products
        </button>
      </div>
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
    height: "100vh",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  message: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    color: "#555",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
  },
  button: {
    backgroundColor: "#007bff", // Blue color for initial state
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "12px 25px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    backgroundImage: "linear-gradient(90deg, #007bff, #0056b3)", // Gradient background
  },
  buttonHover: {
    backgroundColor: "#0056b3",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)", // Stronger shadow on hover
  },
};

export default PaymentStatusPage;
