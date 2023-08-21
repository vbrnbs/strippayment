import { useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

const Cart = ({ items }) => {
  const cart = useContext(CartContext);

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); //Forwarding user to stripe
        }
      });
  };

  return (
    <div>
      <a href="#my-modal" className="btn btn-primary m-10">
        Kosár ( {items} )
      </a>
      <div id="my-modal" className="modal">
        <div className="modal-box">
          <div className="">
            <h3 className="font-bold text-lg">Kosarad Tartalma:</h3>
            {cart.items.map((currentProduct, idx) => (
              <CartProduct
                key={idx}
                id={currentProduct.id}
                quantity={currentProduct.quantity}
              />
            ))}
            <div className="flex justify-between items-center">
              <h1>Teljes Összeg: {cart.getTotalCost()} Ft</h1>
              <button className="btn btn-success" onClick={checkout}>
                Fizetés
              </button>
            </div>
          </div>
          <div className="modal-action">
            <a
              href="#"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              x
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
