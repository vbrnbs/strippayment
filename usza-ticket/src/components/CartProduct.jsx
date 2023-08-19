import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { getProductData } from "../productsArray";
import ToCart from "./ToCart";

const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <div>
      <h3>{productData.title}</h3>
      <p>{quantity}</p>
      <p>{quantity * productData.price} Ft</p>
      <ToCart id={id} productQuantity={quantity}/>
    </div>
  );
};

export default CartProduct;
