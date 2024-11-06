import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutPage from "./components/pages/CheckoutPage.js";
import HomePage from "./components/pages/HomePage.js";
import ProductDetailPage from "./components/pages/ProductDetailPage.js";
import ProductListingPage from "./components/pages/ProductListingPage.js";
import PaymentStatusPage from "./components/pages/PaymentStatusPage.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment-status" element={<PaymentStatusPage />} />
      </Routes>
    </Router>
  );
}
export default App;
