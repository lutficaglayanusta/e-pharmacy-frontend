import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import styles from "./Products.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/operation";
import { useState } from "react";
import Modal from 'react-modal'; 
import ModalForm from "../ModalForm/ModalForm";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
  }
};

const Products = ({
  products,
  currentPage,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  onPageChange,
}) => {
   const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch()

  const handleCart = (product) => {
    dispatch(addToCart({
      photo: product.photo,
      name: product.name,
      suppliers: product.suppliers,
      price: product.price,
      quantity:1
    })).unwrap()
      .then(() => {
      
      }).catch((e) => {
        if (e === "Request failed with status code 401") {
          openModal()
        }
      
    })
  }

  return (
    <div>
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
                  <button onClick={()=>handleCart(product)} className={styles.button}>Add to cart</button>
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

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
          onPageChange={onPageChange}
        />
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalForm onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default Products;
