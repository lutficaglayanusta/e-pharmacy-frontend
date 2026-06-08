import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import styles from "./ModalForm.module.css"
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

const ModalForm = ({ onClose }) => {
    
    const dispatch = useDispatch()

    const handleSubmit = (values) => {
        dispatch(login(values))
        onClose()
    }
    const handleClose = () => {
        onClose()
    }

  return (
      <div className={styles.wrapper}>
          <h2>Log in to your account</h2>
          <p>
              Please login to your account before continuing.
          </p>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <Form className={styles.form}>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <ErrorMessage name="email" component="span" className={styles.error} />
          
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="span" className={styles.error} />

          <button type="submit">Log in</button>
          <Link to="/register">Don't have an account?</Link>
        </Form>
          </Formik>
          <img className={styles.eks} onClick={handleClose} src="../../../eks.svg" alt="" />
    </div>
  )
}

export default ModalForm
