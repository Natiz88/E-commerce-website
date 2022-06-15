import "./Product.css";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { actionTypes } from "../../../Redux/cartSlice";
import { actions } from "../../../Redux/wishlistSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product" key={product.id}>
      <Link to={`/productDetail/${product.id}`}>
        <img alt="img" src={product.imgdata} />
      </Link>
      <h3>{product.rname}</h3>
      <h3>Rs: {product.price}</h3>
      <div className="buttons">
        <button onClick={() => dispatch(actions.addToList(product.id))}>
          <FaHeart className="heart" />
        </button>
        <button onClick={() => dispatch(actionTypes.addToCart(product.id))}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
export default Product;
