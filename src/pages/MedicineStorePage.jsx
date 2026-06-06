import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMedicineStores } from "../redux/medicine-stores/operation";
import MedicineStore from "../components/MedicineStore/MedicineStore";

const MedicineStorePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMedicineStores());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <MedicineStore />
      </div>
      
    </>
  );
};

export default MedicineStorePage;
