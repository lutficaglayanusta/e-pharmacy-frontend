import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import styles from "./RegisterForm.module.css";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
  phoneNumber: Yup.string().required("Required"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));

    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          phoneNumber: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        <Form className={styles.form}>
          <div>
            <div className={styles.field}>
              <Field
                id="name"
                name="name"
                placeholder="User Name"
                type="text"
              />
              <ErrorMessage
                name="name"
                component="span"
                className={styles.error}
              />
            </div>
            <div className={styles.field}>
              <Field
                id="email"
                name="email"
                placeholder="Email address"
                type="email"
              />
              <ErrorMessage
                name="email"
                component="span"
                className={styles.error}
              />
            </div>
          </div>

          <div>
            <div className={styles.field}>
              <Field
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone number"
                type="tel"
              />
              <ErrorMessage
                name="phoneNumber"
                component="span"
                className={styles.error}
              />
            </div>
            <div className={styles.field}>
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage
                name="password"
                component="span"
                className={styles.error}
              />
            </div>
          </div>

          <button type="submit">Register</button>
          <Link to="/login">Already have an account?</Link>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterForm;
