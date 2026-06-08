import { NavLink } from "react-router-dom"
import styles from "./Nav.module.css"

const Nav = ({ onLinkClick }) => {
  return (
    <ul className={styles.nav}>
      <li><NavLink to="/" onClick={onLinkClick}>Home</NavLink></li>
      <li><NavLink to="/medicine-store" onClick={onLinkClick}>Medicine store</NavLink></li>
      <li><NavLink to="/medicine" onClick={onLinkClick}>Medicine</NavLink></li>
    </ul>
  )
}

export default Nav