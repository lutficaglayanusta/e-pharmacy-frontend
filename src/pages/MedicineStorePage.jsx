import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMedicineStores } from "../redux/medicine-stores/operation";
import { selectMedicineStores } from "../redux/medicine-stores/selector";

const MedicineStorePage = () => {

    const dispatch = useDispatch();

    const stores = useSelector(selectMedicineStores);

    useEffect(() => {
        dispatch(fetchMedicineStores());
    }, [dispatch])

    console.log(stores)


  return (
    <div>
      
    </div>
  )
}

export default MedicineStorePage
