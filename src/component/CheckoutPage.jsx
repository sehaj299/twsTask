import React, { useState } from "react";
import ModalForm from "./ModalForm";
import { useNavigate } from "react-router-dom";

const CheckoutPage = ({ cart, handleCustomerInfo }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // handle openModal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  // handle closeModal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  // handle submit of form
  const handleSubmit = (values) => {
    handleCustomerInfo(values);
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
