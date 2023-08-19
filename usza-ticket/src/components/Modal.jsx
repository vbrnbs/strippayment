import { useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

const Modal = ({ items }) => {
  const cart = useContext(CartContext);

  return (
    <div>
      <button className="btn" onClick={() => window.my_modal_3.showModal()}>
        Kosár ( {items} )
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Kosarad Tartalma:</h3>
          {cart.items.map((currentProduct, idx) => (
            <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}/>
          ))}
          <h1>Teljes Összeg: {cart.getTotalCost()} Ft</h1>
          <button 
            className="btn btn-success"
            onClick={() => cart.addOneToCart(currentProduct.id)}
            >
              Fizetés
            </button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
