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
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <img
                  src={product.photo}
                  alt={product.name}
                  className={styles.productImage}
                />
              </div>
              <h3>{product.name}</h3>
              <p className={styles.category}>{product.category}</p>
              <p className={styles.price}>₺{product.price}</p>
              <button className={styles.addToCart}>Sepete Ekle</button>
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
