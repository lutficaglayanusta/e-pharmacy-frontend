import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/products/operation";

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

  const handleReset = () => {
    dispatch(fetchProducts({ category: '', name: '', page: 1 }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="category" id="category" defaultValue="">
          <option value="">Tüm Kategoriler</option>
          <option value="Medicine">Medicine</option>
          <option value="Heart">Heart</option>
          <option value="Head">Head</option>
          <option value="Hand">Hand</option>
          <option value="Leg">Leg</option>
        </select>
        <input type="text" name="name" placeholder="Search products..." />
        <button type="submit">Filter</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};

export default FilterProducts;
