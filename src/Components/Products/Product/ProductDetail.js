import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./ProductDetail.css";
import { FaHeart } from "react-icons/fa";
import { actionTypes } from "./../../../Redux/cartSlice";
import { actions } from "./../../../Redux/wishlistSlice";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const Items = useSelector((state) => state.cart.products);
  const { id } = useParams();
  const product = Items.find((item) => item.id === parseInt(id));
  return (
    <>
      <div className="backImage">
        <img src={product.imgdata} alt="" />
      </div>
      <div className="dark"></div>
      <div className="productDetail">
        <div className="pageDetails__container">
          <h1>{product.rname}</h1>
          <div className="pageDetails">
            <img src={product.imgdata} alt="" className="insideImage" />
            <div className="details">
              <h2>
                Oder review: <span>{product.somedata}</span>
              </h2>
              <h2>
                Dishes: <span>{product.address}</span>
              </h2>
              <h2>
                Ratings: <span>{product.rating} ⭐</span>
              </h2>
              <h2>
                Price: <span>Rs.{product.price}</span>
              </h2>
              <div className="buttons">
                <button onClick={() => dispatch(actions.addToList(product.id))}>
                  <FaHeart className="heart" />
                </button>
                <button
                  onClick={() => dispatch(actionTypes.addToCart(product.id))}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
