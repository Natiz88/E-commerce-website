import React from "react";
import "./Navbar.css";
import Image from "./logo.png";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  console.log("whishlist", typeof wishlist);
  console.log("whishlist", typeof cart);
  console.log("wishlist", wishlist);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishListCount] = useState(0);
  const [isOn, setOn] = useState(false);
  const toggle = () => {
    isOn ? setOn(false) : setOn(true);
  };

  useEffect(() => {
    let val = 0;
    cart.forEach((item) => (val += item.qty));
    let val2 = wishlist.length;
    setCartCount(val);
    setWishListCount(val2);
  }, [cartCount, wishlistCount, wishlist, cart]);

  return (
    <div className="nav">
      {isOn ? (
        <ImCross className="hamburger-menu" onClick={() => toggle()} />
      ) : (
        <GiHamburgerMenu className="hamburger-menu" onClick={() => toggle()} />
      )}

      <div className="logo">
        <Link to="/E-commerce-website">
          <img src={Image} alt="" />
        </Link>
      </div>

      <div className={isOn ? "links-expanded" : "links"}>
        <div className="categories">
          <Link to="/E-commerce-website">Products</Link>
          <a href="">About</a>
          <a href="">Sign Up</a>
        </div>
        <div className="baskets">
          <Link to="/Wishlist">
            <i>
              <FaHeart />
              <span>{wishlistCount}</span>
            </i>
          </Link>
          <Link to="/Cart">
            <i>
              <FaShoppingCart />
              <span>{cartCount}</span>
            </i>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
