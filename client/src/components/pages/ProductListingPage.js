import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Listing</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              flex: "0 1 calc(33.333% - 20px)",
              boxSizing: "border-box",
              margin: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              transition: "transform 0.2s",
              backgroundColor: "lightgrey",
            }}
          >
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3>{product.name}</h3>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  margin: "5px 0",
                }}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductListingPage;
