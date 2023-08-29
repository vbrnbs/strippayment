import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsArray";

const ToCart = ({ full, kedv }) => {
  if (!full || !kedv) {
    return null; // Or display a loading message/error message
  }
  const cart = useContext(CartContext);
  const productQuantity =
    cart.getProductQuantity(full.id) + cart.getProductQuantity(kedv.id);

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
      {productQuantity > 0 ? (
        <div className="text-lg my-12">
          <p className="mb-4">Kosárban: {productQuantity}</p>
          <div className="my-4">
            <div className="flex justify-between items-center">
            <div>
              Teljes Ár: {full.price} Ft
            </div>
            <div>
              <p>db: {cart.getProductQuantity(full.id)}</p>
            </div>
            <div className="flex gap-2">
            <button
                className="btn btn-error"
                onClick={() => cart.deleteFromCart(full.id)}
              >
                törlés
              </button>
            <button
                className="btn btn-primary"
                onClick={() => cart.removeOneFromCart(full.id)}
              >
                -
              </button>
              <button
                className="btn btn-primary"
                onClick={() => cart.addOneToCart(full.id)}
              >
                +
              </button>
              
            </div>
              
            </div>
          </div>

          <div className="my-4">
            <div className="flex justify-between items-center">
            <div>
              Teljes Ár: {kedv.price} Ft
            </div>
            <div>
              <p>db: {cart.getProductQuantity(kedv.id)}</p>
            </div>
            <div className="flex gap-2">
            <button
                className="btn btn-error"
                onClick={() => cart.deleteFromCart(kedv.id)}
              >
                törlés
              </button>
            <button
                className="btn btn-primary"
                onClick={() => cart.removeOneFromCart(kedv.id)}
              >
                -
              </button>
              <button
                className="btn btn-primary"
                onClick={() => cart.addOneToCart(kedv.id)}
              >
                +
              </button>
              
            </div>
              
            </div>
          </div>
          <div className="flex justify-between items-center mt-12">
            <h1>Teljes Összeg: {cart.getTotalCost()} Ft</h1>
            <button className="btn btn-success" onClick={checkout}>
              Fizetés
            </button>
          </div>
        </div>
      ) : (
        <button
          className="btn btn-primary"
          // INSTEAD JUST OPEN PART HERE !!!!!!!!!!!!
          onClick={() => cart.addOneToCart(full.id)}
        >
          vásárlás
        </button>
      )}
    </div>
  );
};

export default ToCart;
