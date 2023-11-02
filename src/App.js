import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CheckoutPage from "./component/CheckoutPage";
import { Routes } from "react-router-dom";
import ProductListing from "./component/ProductListing";
import ReviewOrderPage from "./component/ReviewOrderPage";
import Header from "./Header";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({});
  const handleCustomerInfo = (info) => {
    setCustomerInfo(info);
  };

  const addToCart = (productId) => {
    // Update product according to disabled button
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, inCart: true } : product
      )
    );

    // Add products to cart
    const selectedProduct = products.find((product) => product.id === productId);
    setCart((prevCart) => [...prevCart, selectedProduct]);
  };

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");
        const data = await response.json();
        setProducts(data.posts);
      } catch (error) {
        console.log( error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing products={products} addToCart={addToCart} />} />
          <Route
            path="/checkout"
            element={<CheckoutPage cart={cart} handleCustomerInfo={handleCustomerInfo} />}
          />
          <Route path="/checkout/review" element={<ReviewOrderPage cart={cart} customerInfo={customerInfo} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;