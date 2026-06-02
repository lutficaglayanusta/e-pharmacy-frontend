import LoginForm from '../components/LoginForm/LoginForm'
import logo from '../assets/img/white round pill.png'

const LoginPage = () => {
  return (
    <>
      <h1>Your medication, delivered Say goodbye to all your healthcare worries with us</h1> 
      <img src={logo} alt="Logo" />
      <LoginForm />
    </>
  )
}

export default LoginPage
