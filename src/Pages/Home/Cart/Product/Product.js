import React from "react";
import './Product.css';
import {AiOutlineDelete} from 'react-icons/ai';

const Product = (props) => {
  const {cart} = props;
  const { name, img } = props.cart;
  const {deleteItem} = props;
  console.log("test", props);


  return (
    <div>
      <div className="item-container">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <AiOutlineDelete onClick={()=> deleteItem(props.cart)} className="delete-icon"></AiOutlineDelete>
      </div>
    </div>
  );
};

export default Product;
