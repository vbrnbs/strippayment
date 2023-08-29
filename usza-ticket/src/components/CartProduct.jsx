import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { getProductData } from "../productsArray";
import ToCart from "./ToCart";

const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);
  const ppp = id === productData.full.id ? productData.full : productData.kedv
  // console.log(productData.title)

  return (
    <div className="my-6">
      <h3>{productData.title}</h3>
      <p>{quantity} db</p>
      <p>{quantity * ppp.price} Ft</p>
      <ToCart id={id} productQuantity={quantity}/>
    </div>
  );
};

export default CartProduct;
