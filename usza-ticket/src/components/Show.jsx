import { CartContext } from "../CartContext";
import { useContext } from "react";
import ToCart from "./ToCart";

const Show = ({ id, image, title, desc, time, price }) => {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(id);

  return (
    <div className="flex justify-between border rounded-sm mb-6">
      <div className="w-2/6 flex justify-center items-center h-52">
        <img
          src={image}
          alt={title}
          className="object-cover object-center h-52"
        />
      </div>
      <div className="w-3/6 py-2 pl-2">
        <div className="text-xl font-bold">{title}</div>
        <div className="text-sm">{desc}</div>
        <div className="text-sm">{time}</div>
        <div className="text-sm">{price} Ft</div>
        
        
      </div>
      <div className="w-1/6 flex justify-end items-end p-2">
        <ToCart id={id} productQuantity={productQuantity} />
      </div>
    </div>
  );
};

export default Show;
