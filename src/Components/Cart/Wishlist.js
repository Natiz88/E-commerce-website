import React from "react";
import "./Wishlist.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../Redux/wishlistSlice";
import { actionTypes } from "../../Redux/cartSlice";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();
  return (
    <div className="listItems__container">
      <div className="list__items">
        {wishlist.map((product) => (
          <div className="listItem" key={product.id}>
            <Link to={`/ProductDetail/${product.id}`}>
              <img src={product.imgdata} alt="" className="insideImage" />
            </Link>
            <div className="listItem__details">
              <h2>
                Dish: <span>{product.rname}</span>
              </h2>
              <h2>
                Ratings: <span>{product.rating} ⭐</span>
              </h2>
              <h2>
                Price: <span>Rs.{product.price}</span>
              </h2>
              <div className="buttons">
                <button
                  onClick={() => dispatch(actions.removeFromList(product))}
                >
                  <RiDeleteBin6Fill className="heart" />
                </button>
                <button
                  onClick={() => dispatch(actionTypes.addToCart(product.id))}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
