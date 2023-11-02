// ReviewOrderPage.js
import React from "react";


const ReviewOrderPage = ({ cart, customerInfo }) => {
  return (
    <div>
      <h2>Review and Submit Order Page</h2>
      <h3>Cart Items:</h3>
      <ul>
        {cart.map((product) => (
          <div key={product.id}>
            <h3>Name: {product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </ul>
      <h3>Customer Information:</h3>
      <p>First Name: {customerInfo.firstName}</p>
      <p>Last Name: {customerInfo.lastName}</p>
      <p>Phone: {customerInfo.phone}</p>
      <p>Email: {customerInfo.email}</p>
    </div>
  );
};

export default ReviewOrderPage;
