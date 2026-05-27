import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <ul className={styles.nav}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/medicine-store">Medicine store</NavLink>
      </li>
      <li>
        <NavLink to="/medicine">Medicine</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
