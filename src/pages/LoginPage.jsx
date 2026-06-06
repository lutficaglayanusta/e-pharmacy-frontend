import LoginForm from '../components/LoginForm/LoginForm'
import logo from '../assets/img/white round pill.png'

import "../App.css";

const LoginPage = () => {
  return (
    <section>
      <div className="container login-page">
        <div className="login-header">
          <h1>Your medication, delivered Say goodbye to all <span>your healthcare</span> worries with us</h1>
          <img src={logo} alt="Logo" />
        </div>
        <LoginForm />
      </div>
    </section>
  )
}

export default LoginPage