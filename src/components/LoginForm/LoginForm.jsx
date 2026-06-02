import { Formik, Field, Form,ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
 

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

const LoginForm = () => {

  const dispatch = useDispatch();


  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <Form>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <ErrorMessage name="email" component="span" />
          
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="span" />

          <button type="submit">Log in</button>
          <Link to="/register">Don't have an account?</Link>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
