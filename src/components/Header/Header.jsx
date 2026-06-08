import { useState } from "react";
import logo from "../../assets/img/logo.png";
import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="container header-container">
          <img src={logo} alt="logo" />
          <div className={styles.desktopNav}>
            <Nav />
          </div>
          <div className={styles.desktopNav}>
            <AuthNav />
          </div>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}

      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}>
        <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
          ✕
        </button>
        <Nav onLinkClick={() => setMenuOpen(false)} />
        <div className={styles.drawerAuth}>
          <AuthNav />
        </div>
      </div>
    </>
  );
};

export default Header;
