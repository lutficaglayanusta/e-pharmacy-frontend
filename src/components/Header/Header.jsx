import logo  from "../../assets/img/logo.png"
import Nav from "../Nav/Nav"
import AuthNav from "../AuthNav/AuthNav"

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <img src={logo} alt="logo" />
        <Nav />
        <AuthNav />
      </div>
    </header>
  )
}

export default Header
