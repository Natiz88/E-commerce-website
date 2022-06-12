import React from 'react';
import './Navbar.css';
import Image from './logo.png';
import {FaShoppingCart,FaHeart} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {ImCross} from 'react-icons/im';

function Navbar() {
  const [isOn, setOn] = useState(false);
  const toggle = () => {
    isOn ? setOn(false) : setOn(true);
  };
  return (
    <div className="nav">
          {isOn?<ImCross className="hamburger-menu" onClick={() => toggle()} />:<GiHamburgerMenu className="hamburger-menu" onClick={() => toggle()} />}

    <div className="logo">
    <Link to="/">
    <img src={Image} alt="" />
    </Link>
    </div>
      
    <div className={isOn ? "links-expanded" : "links"}>
        <div className="categories">
          <Link to="/">All</Link>
          <Link to="/">Mens</Link>
          <Link to="/">Womens</Link>
          <Link to="/">Kids</Link>
        </div>
        <div className="baskets">
          <i><FaHeart /></i>
          <Link to="/Cart"><i><FaShoppingCart /></i></Link>
        </div>
      </div>
    </div>
  )
}
export default Navbar;