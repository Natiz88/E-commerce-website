import React from 'react';
import './Cart.css';

function Cart() {
  return (
    <div className='cart__container'>
        <div className="cart__items"></div>
        <div className="checkout">
            <h2>Price details (0 items)</h2>
            <h3>Total MRP<span>Rs 500</span></h3>
            <h3>Discount<span>Rs 500</span></h3>
            <h3>Delivery Charges<span>Rs 100</span></h3>
            <hr />
            <h2>Total Amount<span>Rs.500 </span></h2>
            <button>Checkout</button>
        </div>
    </div>
  )
}

export default Cart