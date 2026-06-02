import RegisterForm from "../components/RegisterForm/RegisterForm";
import logo from "../assets/img/white round pill.png";

import "../App.css";

const RegisterPage = () => {
  return (
    <section>
      <div className="container register-page">
        <div className="register-header">
        <h1>
          Your medication, delivered Say goodbye to all your healthcare worries
          with us
        </h1>
        <img src={logo} alt="Logo" />
      </div>

      <RegisterForm />
      </div>
      
    </section>
  );
};

export default RegisterPage;
