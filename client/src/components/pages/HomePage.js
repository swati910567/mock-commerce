// import React from "react";

// const HomePage = () => {
//   const styles = {
//     body: {
//       margin: 0,
//       fontFamily: "Arial, sans-serif",
//       background: "linear-gradient(to right, #ff7e5f, #feb47b)",
//       color: "#333",
//       textAlign: "center",
//       height: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       flexDirection: "column",
//     },
//     heading: {
//       fontSize: "3rem",
//       margin: "20px 0",
//       color: "white",
//       textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//     },
//     paragraph: {
//       fontSize: "1.5rem",
//       margin: "10px 0 40px",
//       lineHeight: 1.5,
//       color: "#fff",
//     },
//     button: {
//       backgroundColor: "#feb47b",
//       color: "white",
//       border: "none",
//       borderRadius: "5px",
//       padding: "15px 30px",
//       fontSize: "1.2rem",
//       cursor: "pointer",
//       transition: "background-color 0.3s ease",
//     },
//     buttonHover: {
//       backgroundColor: "#ff7e5f",
//     },
//   };

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={styles.body}>
      <h2 style={styles.heading}>Welcome to Mock eCommerce!</h2>
      <p style={styles.paragraph}>Discover amazing products at great prices.</p>
      <Link to="/products" style={{ textDecoration: "none" }}>
        <button
          style={styles.button}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.button.backgroundColor)
          }
        >
          Start Shopping
        </button>
      </Link>
    </div>
  );
};

// Inline styles
const styles = {
  body: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
    color: "#333",
    textAlign: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  heading: {
    fontSize: "3rem",
    margin: "20px 0",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  paragraph: {
    fontSize: "1.5rem",
    margin: "10px 0 40px",
    lineHeight: 1.5,
    color: "#fff",
  },
  button: {
    backgroundColor: "#feb47b",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "15px 30px",
    fontSize: "1.2rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#ff7e5f",
  },
};

export default HomePage;
