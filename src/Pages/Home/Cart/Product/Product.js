import React from "react";
import './Product.css'

const Product = (props) => {
  const { name, img } = props.cart;
  console.log("test", props);
  return (
    <div>
      <div className="item-container">
        <img src={img} alt="" />
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Product;
