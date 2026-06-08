import { useSelector } from "react-redux";
import { selectMedicineStores } from "../../redux/medicine-stores/selector";
import styles from "./MedicineStore.module.css";

const MedicineStore = () => {
  const stores = useSelector(selectMedicineStores);

  return (
    <div>
      <ul className={styles.store}>
        {stores.map((store) => (
          <li key={store._id}>
            <h2>{store.name}</h2>

            <div className={styles.layout}>
              <img src="../../../map-pin.svg" alt="map" />
              <p className={styles.address}>{store.address}</p>
            </div>
            <div className={styles.layout}>
              <img src="../../../phone.svg" alt="phone" />
              <p className={styles.phone}>{store.phone}</p>
            </div>

            <div className={styles.detail}>
              <button>Visit Store</button>
              <div className={styles.layout}>
                <img src="../../../star.svg" alt="star" />
                <p>{store.rating}</p>
                    </div>
                    
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineStore;
