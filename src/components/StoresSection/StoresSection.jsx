import { useSelector } from "react-redux";
import styles from "./StoresSection.module.css";
import { selectMedicineStores } from "../../redux/medicine-stores/selector";

const StoresSection = () => {
  const medicines = useSelector(selectMedicineStores);

  const newMedicines = medicines.slice(0, 6);

  return (
    <section>
      <div className="container">
        <h2 className={styles.heading}>Your Nearest Medicine Store</h2>
        <p className={styles.parag}>
          Search for Medicine, Filter by your location
        </p>
        <ul className={styles.wrapper}>
          {newMedicines.map((item) => (
            <li key={item._id}>
              <div className={styles.layout}>
                <h3>{item.name}</h3>
                <div className={styles.info}>
                  <img src="../../../star.svg" alt="" />
                  <p>{item.rating}</p>
                </div>
              </div>
              <div className={styles.layout}>
                <img src="../../../map-pin.svg" alt="" />

                <p>{item.address}</p>
              </div>

              <div className={styles.layout}>
                <img src="../../../phone.svg" alt="" />
                <p>{item.phone}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StoresSection;
