import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import styles from "./Products.module.css";

const Products = ({
  products,
  currentPage,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  onPageChange,
}) => {
  return (
    <div>
      {/* Ürünler Listesi */}
      <div className={styles.productsGrid}>
        {products && products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className={styles.productCard}>
              <img
                src={product.photo}
                alt={product.name}
                className={styles.productImage}
              />
              <div className={styles.description}>
                <div className={styles.detay}>
                  <div>
                    <h3 className={styles.name}>{product.name}</h3>
                    <p className={styles.suppliers}>{product.suppliers}</p>
                  </div>
                   
                  <p className={styles.price}>₺{product.price}</p>
                </div>
               
                <div className={styles.detay}>
                  <button className={styles.button}>Add to cart</button>
                <Link
                  to={`/medicine/${product._id}`}
                  className={styles.detailsLink}
                >
                  Details
                </Link>
                </div>
                
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noProducts}>Ürün bulunamadı.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default Products;
