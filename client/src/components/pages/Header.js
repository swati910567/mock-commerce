import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Mock eCommerce</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/products" style={styles.link}>
          Products
        </Link>
        <Link to="/checkout" style={styles.link}>
          Checkout
        </Link>
      </nav>
    </header>
  );
};

// Inline styles
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#333", // Dark background
    color: "#fff", // White text
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "1.8rem",
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: "20px", // Space between links
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "background-color 0.3s, color 0.3s",
  },
};

export default Header;
