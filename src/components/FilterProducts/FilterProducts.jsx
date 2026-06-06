import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/products/operation";
import styles from "./FilterProducts.module.css"

const FilterProducts = ({ onFilter }) => {

    const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const category = e.target.elements.category.value;
      const name = e.target.elements.name.value;
      
      dispatch(fetchProducts({ category, name, page: 1 }));

      if (onFilter) {
        onFilter();
      }
  };

  return (
    <div className={styles.filter}>
      <form onSubmit={handleSubmit}>
        <select className={styles.category} name="category" id="category" defaultValue="">
          <option value="">All Categories</option>
          <option value="Medicine">Medicine</option>
          <option value="Heart">Heart</option>
          <option value="Head">Head</option>
          <option value="Hand">Hand</option>
          <option value="Leg">Leg</option>
        </select>
        <input type="search" name="name" className={styles.search} placeholder="Search products..." />
        <button type="submit" className={styles.button}>Filter</button>
      </form>
    </div>
  );
};

export default FilterProducts;
