import { useDispatch } from "react-redux"
import { logout } from "../../redux/auth/operations"
import styles from "./UserNav.module.css"
import { Link } from "react-router-dom"


const UserNav = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }


  return (
    <div>
      <Link to="/cart">
        <img className={styles.cart} src="../../../public/shopping-cart.svg" alt="Shopping Cart" />
      </Link>
      
      <button className={styles.logout} onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserNav
