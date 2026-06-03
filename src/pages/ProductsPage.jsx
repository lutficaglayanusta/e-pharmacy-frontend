import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/products/operation";
import { 
  selectProducts, 
  selectPage, 
  selectTotalPages, 
  selectHasNextPage, 
  selectHasPreviousPage 
} from "../redux/products/selector";
import FilterProducts from "../components/FilterProducts/FilterProducts";
import Products from "../components/Products/Products";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ category: '', name: '' });

  const products = useSelector(selectProducts);
  const currentPage = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const hasNextPage = useSelector(selectHasNextPage);
  const hasPreviousPage = useSelector(selectHasPreviousPage);

  useEffect(() => {
    dispatch(fetchProducts({ ...filters, page: 1 }));
  }, [dispatch,filters]);

  const handleFilterChange = () => {
    setFilters({ category: '', name: '' });
  };

  const handlePageChange = (pageNumber) => {
    dispatch(fetchProducts({ ...filters, page: pageNumber }));
  };

  return (
    <section>
      <div className="container">
        <h1>Medicine</h1>
        <FilterProducts onFilter={handleFilterChange} />
        
        <Products
          products={products}
          currentPage={currentPage}
          totalPages={totalPages}
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default ProductsPage;
