import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductById } from "../redux/products/operation";
import ProductsDetail from "../components/ProductsDetail/ProductsDetail";

const ProductDetailsPage = () => {

    const { id } = useParams();
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductById(id));
    },[dispatch,id])

    
  return (
    <>
      <div className="container">
        <ProductsDetail/>
      </div>
      
    </>
  )
}

export default ProductDetailsPage
