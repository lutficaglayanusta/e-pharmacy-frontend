import { useDispatch } from "react-redux"
import { logout } from "../../redux/auth/operations"


const UserNav = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }


  return (
    <div>
      <img src="../../../public/shopping-cart.svg" alt="Shopping Cart" />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserNav
