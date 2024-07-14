import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const registerUserForm = Yup.object().shape({
  name: Yup.string()
    .min(3, "Your name is too Short!")
    .max(30, "Your name is too Long!")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .min(10, "Your email is too Short!")
    .max(50, "Your email is too Long!")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Your password is too Short!")
    .max(50, "Your password is too Long!")
    .required("Password is required"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div>
      <h2>Register user</h2>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={registerUserForm}
        onSubmit={handleSubmit}
      >
        <Form className={css.contactForm}>
          <div className={css.formGroup}>
            <label htmlFor="name">Name:</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage component="p" name="name" />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage component="p" name="email" />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage component="p" name="password" />
          </div>
          <button type="submit">Sign up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
