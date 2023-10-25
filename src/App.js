import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CheckoutPage from "./component/CheckPage";
import { Routes } from "react-router-dom";
import ProductListing from "./component/PrductListing";
import ReviewOrderPage from "./component/ReviewOrderPage";
import Header from "./Header";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [values, setValues] = useState([]);
  const handleValues = (values) => {
    setValues(values);
  };
  const addToCart = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, inCart: true } : product
    );
    setProducts(updatedProducts);
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    setCart([...cart, selectedProduct]);
    console.log("cart", cart);
  };
  const fetchProducts = async () => {
    try {
      const response = await fetch("./data.json");
     
      const data = await response.json();
     
      setProducts(data.posts);
      console.log(products)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Router>
      <div>
        <Header/>
      <Routes>
        <Route
          path="/"
          element={<ProductListing products={products} addToCart={addToCart} />}
        />
        <Route
          path="/checkout"
          element={<CheckoutPage cart={cart} handleValues={handleValues} />}
        />
        <Route
          path="/checkout/review"
          element={<ReviewOrderPage cart={cart} values={values} />}
        />
      </Routes>
      </div>
     
    </Router>
  );
}

export default App;
