import { useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

const Modal = ({ items }) => {
  const cart = useContext(CartContext);

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: "POST",
      headers : {
        'Content-Type':'application/json' 
      },
      body: JSON.stringify({items: cart.items})
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if(response.url) {
        window.location.assign(response.url)  //Forwarding user to stripe
      }
    })
  }

  return (
    <div>
      <button className="btn" onClick={() => window.my_modal_3.showModal()}>
        Kosár ( {items} )
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box moda-open modal-top">
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
            onClick={checkout}
            >
              Fizetés
            </button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
