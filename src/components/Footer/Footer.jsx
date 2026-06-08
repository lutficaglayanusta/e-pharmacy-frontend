import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../assets/img/new-logo.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <img src={logo} alt="" />
          <ul className = {styles.list}>
            <li>
              <Link to="/" className={styles.link}>Home</Link>
            </li>
            <li>
              <Link to="/medicine-store" className={styles.link}>Medicine store</Link>
            </li>
            <li>
              <Link to="/medicine" className={styles.link}>Medicine</Link>
            </li>
          </ul>
          <ul className = {styles.list}>
            <li>
              <a className={styles.icon} href="https://www.facebook.com/goITclub/" target="_blank">
                <img src="../../../facebook.svg"  alt="" />
              </a>
            </li>
            <li>
              <a className={styles.icon} href="https://www.instagram.com/goitclub/" target="_blank">
                <img src="../../../instagram.svg"  alt="" />
              </a>
            </li>
            <li>
              <a className={styles.icon} href="https://www.youtube.com/c/GoIT" target="_blank">
                <img src="../../../youtube.svg"  alt="" />
              </a>
            </li>
          </ul>
        </div>
        <p className={styles.info}>
          Get the medicine to help you feel better, get back to your active life, and enjoy every moment.
        </p>
        <ul className={styles.right}>
          <li>
            © E-Pharmacy 2023. All Rights Reserved
          </li>
          <li>
            Privacy Policy
          </li>
          <li>
            Terms & Conditions
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
