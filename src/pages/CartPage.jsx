import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCart } from "../redux/cart/operation";
import Carts from "../components/Carts/Carts";
import OrderForm from "../components/OrderForm/OrderForm";

import "../App.css";

const CartPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        <h1>Cart</h1>
        <div className="cart-page">
          <OrderForm/>
          <Carts />
        </div>
        
      </div>
    </div>
  );
};

export default CartPage;
