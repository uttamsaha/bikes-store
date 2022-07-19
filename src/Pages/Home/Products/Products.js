import React, { useEffect, useState } from 'react'
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
  return (
    <div className='shop-container'>
        <div className="product-container">
            {
                products.map(product => <SingleProduct product={product} key={product.id}></SingleProduct>)
            }
        </div>
        <div className='cart-container'>
            <h2>Selected Bikes</h2>
        </div>
    </div>
  )
}

export default Products;