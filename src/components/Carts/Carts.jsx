import { useDispatch, useSelector } from "react-redux";
import styles from "./Carts.module.css";
import { selectCarts } from "../../redux/cart/selector";
import { addToCart, deleteByOneProduct, deleteProductCart } from "../../redux/cart/operation";
import toast from "react-hot-toast";

const Carts = () => {
  const carts = useSelector(selectCarts);

  const dispatch = useDispatch();

  const handleIncrement = (cart) => {
    dispatch(
      addToCart({
        photo: cart.photo,
        name: cart.name,
        suppliers: cart.suppliers,
        price: cart.price,
        quantity: 1,
      }),
    );
    };
    const handleDelete = (id) => {
      dispatch(deleteProductCart(id))
        .unwrap()
        .then(() => {
          toast.success("Deleted from cart successfully")
        })
        .catch(() => {
        toast.error("Something went wrong")
      })
    }
    const handleDeleteOne = (id) => {
        dispatch(deleteByOneProduct(id))
    }

  return (
    <>
      <ul className={styles.cart}>
        {carts.map((cart) => (
          <li key={cart._id}>
            <img src={cart.photo} alt="" />
            <div className={styles.info}>
              <div className={styles.layout}>
                <div>
                  <h2>{cart.name}</h2>
                  <p className={styles.suppliers}>{cart.suppliers}</p>
                </div>
                <p className={styles.price}>৳{cart.price}</p>
              </div>
              <div className={styles.layout}>
                <div className={styles.wrapper}>
                  <button
                    onClick={() => handleIncrement(cart)}
                    className={styles.btn}
                  >
                    +
                  </button>

                  <span className={styles.count}>{cart.quantity}</span>

                  <button onClick={()=> handleDeleteOne(cart._id)} className={styles.btn}>−</button>
                </div>
                <button onClick={()=> handleDelete(cart._id)} className={styles.remove}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Carts;
