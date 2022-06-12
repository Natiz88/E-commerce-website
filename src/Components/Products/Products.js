import React from 'react';
import Items from './Items';
import Product from './Product/Product';
import './Products.css';

function Products() {
  return (
    <div className='container'>
        <div className="products">
            {
                Items.map(product =>
                <div className="container" key={product.id}><Product product={product} /></div> )
            }
        </div>
    </div>
  )
}


export default Products;