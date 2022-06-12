import "./Product.css";
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Product = ({ product }) => {
  return (
    <div className="product" key={product.id}>
            <Link to={`/productDetail/${product.id}`}>
        <img alt="img" src={product.imgdata} />
        </Link>
        <h3>
          {product.rname}
        </h3>
        <h3>Rs: {product.price}</h3>
        <div className="buttons">
          <button><FaHeart className="heart" /></button>
          <button>Add To Cart</button>
        </div>
    </div>

  );
};
export default Product;