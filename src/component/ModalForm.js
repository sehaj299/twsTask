import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

import Modal from "react-modal";

const customStyles = {
  content: {
    width: "50%",
    margin: "auto",
  },
};

Modal.setAppElement("#root");

function ModalForm({ isOpen, onRequestClose, onSubmit }) {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(5, "Name must be of 5 characters")
      .required("firstName is required"),
    lastName: Yup.string()
      .min(5, "Name must be of 5 characters")
      .required("lastName is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),

    phone: Yup.string().required("Phone number is required"),
  });
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div>customer Information</div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="firstName">firstName</label>
              <Field type="text" id="firstName" name="firstName" />
              <ErrorMessage name="firstName" component="div" />
            </div>
            <div>
              <label htmlFor="lastName">lastName</label>
              <Field type="text" id="lastName" name="lastName" />
              <ErrorMessage name="lastName" component="div" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <Field type="phone" id="phone" name="phone" />
              <ErrorMessage name="phone" component="div" />
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default ModalForm;
