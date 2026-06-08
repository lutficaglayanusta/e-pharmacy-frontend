import { NavLink } from "react-router-dom"
import UserNav from "../UserNav/UserNav"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selector"
import styles from "./AuthNav.module.css"

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <ul className={styles.authNav}>
      {isLoggedIn ? (
        <UserNav />
      ) : (
        <>
          <li><NavLink className={styles.register} to="/register">Register</NavLink></li>
          <li><NavLink className={styles.login} to="/login">Login</NavLink></li>
        </>
      )}
    </ul>
  )
}

export default AuthNav