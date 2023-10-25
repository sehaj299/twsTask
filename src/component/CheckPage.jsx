import React, { useState } from "react";
import ModalForm from "./ModalForm";
import { useNavigate } from "react-router-dom";


const CheckoutPage = ({ cart, handleValues }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (values, actions) => {
    handleValues(values);
    navigate("review");

    setIsModalOpen(false);
  };

  return (
    <div>
     
      <h2>Checkout Page</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={handleOpenModal}>proceed to checkout</button>
        <ModalForm
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
