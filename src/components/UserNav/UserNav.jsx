import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/auth/operations"
import styles from "./UserNav.module.css"
import { Link } from "react-router-dom"
import { selectCarts } from "../../redux/cart/selector"


const UserNav = () => {

  const dispatch = useDispatch()

  const carts = useSelector(selectCarts)

  const handleLogout = () => {
    dispatch(logout())
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <Link to="/cart">
        <img className={styles.cart} src="../../../shopping-cart.svg" alt="Shopping Cart" />
        </Link>
        <p>
          {carts.length}
        </p>
      </div>
      
      
      <button className={styles.logout} onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserNav
