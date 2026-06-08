import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductsDetail.module.css";
import { selectProductById } from "../../redux/products/selector";
import { useState } from "react";
import { addToCart } from "../../redux/cart/operation";
import toast from "react-hot-toast";

const ProductsDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

    const product = useSelector(selectProductById);
    
    const dispatch = useDispatch()

  const handleIncrement = () => setQuantity(quantity + 1);
    const handleDelete = () => { if (quantity > 1) setQuantity(quantity - 1); };
    
    const handleAddCart = (product) => {
        dispatch(addToCart({
            photo: product.photo,
            name: product.name,
            suppliers: product.suppliers,
            price: product.price,
            quantity
        }))
        .unwrap()
          .then(() => {
        toast.success("Added to cart successfully")
          })
          .catch(() => {
        toast.error("Something went wrong")
      })
    }

  return (
    <div className={styles.layout}>
      {/* Sol taraf */}
      <div className={styles.description}>
        <img className={styles.image} src={product.photo} alt="" />
        <div className={styles.info}>
          <div>
            <h2 className={styles.name}>{product.name}</h2>
            <p>{product.suppliers}</p>
          </div>
          <p className={styles.price}>৳{product.price}</p>
        </div>
        <div className={styles.actions}>
          <div className={styles.wrapper}>
            <button onClick={handleIncrement} className={styles.btn}>+</button>
            <span className={styles.count}>{quantity}</span>
            <button onClick={handleDelete} className={styles.btn}>−</button>
          </div>
          <button onClick={()=> handleAddCart(product)} className={styles.addToCart}>Add to cart</button>
        </div>
      </div>

      {/* Sağ taraf */}
      <div className={styles.detailPanel}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === "description" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`${styles.tab} ${activeTab === "reviews" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        {activeTab === "description" && (
          <div className={styles.tabContent}>
                      <p>
                          Veritabanında açıklama yok
           </p>
            
          </div>
        )}

        {activeTab === "reviews" && (
          <div className={styles.tabContent}>
            <p>Veritabanında yorum yok.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsDetail;