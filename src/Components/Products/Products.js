import React from "react";
import Product from "./Product/Product";
import Navbar from "./../Navbar/Navbar";
import "./Products.css";
import { useSelector } from "react-redux";

function Products() {
  const Items = useSelector((state) => state.cart);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="products">
          {Items.products.map((product) => (
            <div className="container" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
