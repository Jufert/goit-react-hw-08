import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const loginUserSchema = Yup.object().shape({
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

const LoginForm = () => {
  const dispatch = useDispatch();
  const FORM_INITIAL_VALUES = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={loginUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.contactForm}>
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
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
