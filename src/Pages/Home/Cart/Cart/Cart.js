import React from 'react'
import Product from '../Product/Product';
import './Cart.css';

const Cart = (props) => {
  // const {cart} = props.cart;
   const {cart} = props;
   const {setCart} = props;
   const deleteItem = item => {
    const updatedCart = cart?.filter(x => x !== item);
    setCart(updatedCart);
    console.log("updated cart",updatedCart);

  }
  console.log("cart inside props",props);
  return (
    <div className='cart'>
      <h2>Selected Items:</h2>
      <hr />
      {
        cart?.map(cart => <Product cart={cart} deleteItem={deleteItem} ></Product>)
      }
      <hr />
      {/* <p>items length{cart?.length}</p> */}
      <button className='clear-cart-btn'>Clear Cart</button>
    </div>
  )
}

export default Cart;