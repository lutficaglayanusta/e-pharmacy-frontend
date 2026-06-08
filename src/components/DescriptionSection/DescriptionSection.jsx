import { Link } from "react-router-dom";
import styles from "./DescriptionSection.module.css";
import logo from "../../assets/img/person.png";

const DescriptionSection = () => {
  return (
    <section className={styles.description}>
      <div className="container">
        <div className={styles.info}>
          <div>
            <h4>Add the medicines you need online now</h4>
            <p>
              Enjoy the convenience of having your prescriptions filled from
              home by connecting with your community pharmacy through our online
              platform.
            </p>
            <Link to="/medicine">Buy medicine</Link>
          </div>
          <img className={styles.logo} src={logo} alt="" />
              </div>
              <ul className={styles.list}>
                  <li>
                      <img src="../../../info.svg" className={styles.img} alt="" />
                      <p>
                          Take user orders form online
                      </p>
                  </li>
                  <li>
                      <img src="../../../info.svg" className={styles.img} alt="" />
                      <p>
                          Create your shop profile
                      </p>
                  </li>
                  <li>
                      <img src="../../../info.svg" className={styles.img} alt="" />
                      <p>
                          Manage your store
                      </p>
                  </li>
                  <li>
                      <img src="../../../info.svg" className={styles.img} alt="" />
                      <p>
                          Get more orders
                      </p>
                  </li>
                  <li>
                      <img src="../../../info.svg" className={styles.img} alt="" />
                      <p>
                          Storage shed
                      </p>
                  </li>
              </ul>
      </div>
    </section>
  );
};

export default DescriptionSection;
