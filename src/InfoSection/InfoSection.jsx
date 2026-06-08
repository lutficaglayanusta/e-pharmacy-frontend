import { Link } from "react-router-dom";
import styles from "./InfoSection.module.css";

const InfoSection = () => {
  return (
    <section className={styles.info}>
      <div className="container">
        <ul className={styles.wrapper}>
          <li>
            <div className={styles.layout}>
              <p className={styles.parag}>1</p>
              <p className={styles.description}>Huge Sale</p>
            </div>
            <div className={styles.layout}>
              <p className={styles.size}>70%</p>
              <Link className={styles.link} to="/medicine">Shop now</Link>
            </div>
          </li>
          <li>
            <div className={styles.layout}>
              <p className={styles.parag}>2</p>
              <p className={styles.description}>Secure delivery</p>
            </div>
            <div className={styles.layout}>
              <p className={styles.size}>100%</p>
              <Link className={styles.link} to="/medicine-store">Read more</Link>
            </div>
          </li>
          <li>
            <div className={styles.layout}>
              <p className={styles.parag}>3</p>
              <p className={styles.description}>Off</p>
            </div>
            <div className={styles.layout}>
              <p className={styles.size}>35%</p>
              <Link className={styles.link} to="/medicine">Shop now</Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default InfoSection;
