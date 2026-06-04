import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchProductById } from "../redux/products/operation";
import { selectProductById } from "../redux/products/selector";

const ProductDetailsPage = () => {

    const { id } = useParams();
    
    const dispatch = useDispatch();

    const product = useSelector(selectProductById);

    useEffect(() => {
        dispatch(fetchProductById(id));
    },[dispatch,id])

    console.log(product);
  return (
    <div>
      
    </div>
  )
}

export default ProductDetailsPage
