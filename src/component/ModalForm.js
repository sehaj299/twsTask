import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "50%",
    margin: "auto",
  },
};

Modal.setAppElement("#root");

function ModalForm({ isOpen, onRequestClose, onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Mark the field as touched
    setTouchedFields({
      ...touchedFields,
      [name]: true,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName) {
      errors.firstName = "First Name is required";
    }

    if (!formData.lastName) {
      errors.lastName = "Last Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.phone) {
      errors.phone = "Phone number is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      onSubmit(formData);
      onRequestClose();
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div>Customer Information</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            
          />
          { formErrors.firstName && (
            <div>{formErrors.firstName}</div>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          
          />
          {  formErrors.lastName && (
            <div>{formErrors.lastName}</div>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
           
          />
          { formErrors.email && <div>{formErrors.email}</div>}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
         
          />
          { formErrors.phone && <div>{formErrors.phone}</div>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Modal>
  );
}

export default ModalForm;
