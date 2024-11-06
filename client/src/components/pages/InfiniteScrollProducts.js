import React, { useEffect, useState, useCallback } from "react";

const InfiniteScrollProducts = () => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0); // Tracks the offset for pagination
  const [loading, setLoading] = useState(false); // Loading state

  const fetchProducts = useCallback(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products?limit=10&skip=${offset}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts((prev) => [...prev, ...data.products]);
        setOffset((prev) => prev + 10); // Increment offset by 10
      })
      .finally(() => setLoading(false));
  }, [offset]);

  // Trigger fetchProducts when component mounts and when offset changes
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Infinite Scroll Handler
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;
    fetchProducts(); // Fetch more products when reaching the bottom
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div style={styles.container}>
      <h2>Product List</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={styles.image}
            />
            <h3 style={styles.title}>{product.title}</h3>
            <p style={styles.price}>${product.price}</p>
          </div>
        ))}
      </div>
      {loading && <p style={styles.loading}>Loading...</p>}
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  title: {
    fontSize: "1.1rem",
    margin: "10px 0",
  },
  price: {
    color: "#28a745",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  loading: {
    marginTop: "20px",
  },
};

export default InfiniteScrollProducts;
