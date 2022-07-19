import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart/Cart';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    // add to cart funciton 
    const addToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
  return (
    <div className='shop-container'>
        <div className="product-container">
            {
                products.map(product => <SingleProduct product={product} key={product.id} addToCart={addToCart}></SingleProduct>)
            }
            {/* <hr /> */}
        </div>
        <div className='cart-container'>
            <Cart cart={cart}></Cart>
        </div>
    </div>
  )
}

export default Products;