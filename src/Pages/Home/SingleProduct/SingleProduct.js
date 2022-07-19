import React from 'react';
import './SingleProduct.css';
import {HiOutlineShoppingCart} from 'react-icons/hi';

const SingleProduct = (props) => {
    const {img, name, price} = props.product;
    console.log(props);
  return (
    <div className='product'>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p className='price'>Price: ৳{price}</p>
        <button className='cart-btn'>Add to Cart <HiOutlineShoppingCart className='cart-icon'></HiOutlineShoppingCart></button>
    </div>
  )
}

export default SingleProduct;