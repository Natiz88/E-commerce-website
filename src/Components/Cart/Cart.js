import React from "react";
import Navbar from "./../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { actionTypes } from "../../Redux/cartSlice";
import { actions } from "../../Redux/wishlistSlice";
import { FaHeart } from "react-icons/fa";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [totalMRP, setTotalMRP] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let val = 0;
    let total = 0;
    cart.forEach((item) => (val += item.price * item.qty));
    cart.forEach((item) => (total += item.qty));
    setTotalMRP(val);
    setTotalItem(total);
    setTotalAmount(val + 100);
  }, [totalMRP, cart]);

  return (
    <>
      <Navbar />
      <div className="cart__container">
        <div className="cart__items">
          {cart.map((product) => (
            <div className="cartItem" key={product.id}>
              <Link to={`/ProductDetail/${product.id}`}>
                <img src={product.imgdata} alt="" className="insideImage" />
              </Link>
              <div className="cartItem__details">
                <h2>
                  Dish: <span>{product.rname}</span>
                </h2>
                <h2>
                  Ratings: <span>{product.rating} ⭐</span>
                </h2>
                <h2>
                  Price: <span>Rs.{product.price}</span>
                </h2>
                <h2>
                  Quantity:{" "}
                  <span>
                    <button
                      onClick={() => dispatch(actionTypes.subQty(product.id))}
                    >
                      -
                    </button>
                    {product.qty}
                    <button
                      onClick={() => dispatch(actionTypes.addQty(product.id))}
                    >
                      +
                    </button>
                  </span>
                </h2>
                <div className="buttons">
                  <button
                    onClick={() => dispatch(actions.addToList(product.id))}
                  >
                    <FaHeart className="heart" />
                  </button>
                  <button
                    onClick={() =>
                      dispatch(actionTypes.removeFromCart(product.id))
                    }
                  >
                    Remove From Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout">
          <h2>Price details (0 items)</h2>
          <h3>
            Total MRP<span>{totalMRP}</span>
          </h3>
          <h3>
            Total Items:<span>{totalItem}</span>
          </h3>
          <h3>
            Delivery Charges<span>Rs 100</span>
          </h3>
          <hr />
          <h2>
            Total Amount<span>{totalAmount}</span>
          </h2>
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
