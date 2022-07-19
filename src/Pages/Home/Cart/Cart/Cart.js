import React from 'react'
import Product from '../Product/Product';

const Cart = (props) => {
  // const {cart} = props.cart;
   const {cart} = props;
  console.log("cart inside props",props);
  return (
    <div>
      {
        cart?.map(cart => <Product cart={cart}></Product>)
      }
      <p>items length{cart?.length}</p>
    </div>
  )
}

export default Cart;