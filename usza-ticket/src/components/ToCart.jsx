import { CartContext } from "../CartContext";
import { useContext } from "react";

const ToCart = (props) => {

    const cart = useContext(CartContext);
    console.log(cart)

  return (
    <div>
      {props.productQuantity > 0 ? (
          <div className="text-lg text-center">
            <p>Kosárban: {props.productQuantity}</p>
            <div className="flex">
            <button 
            className="btn btn-primary mr-2"
            onClick={() => cart.removeOneFromCart(props.id) }
            >
              -
            </button>
            <button 
            className="btn btn-primary"
            onClick={() => cart.addOneToCart(props.id)}
            >
              +
            </button>
            </div>
            <button
              className="btn btn-error mt-2"
              onClick={() => cart.deleteFromCart(props.id) }
            >
              törlés
            </button>
            
          </div>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => cart.addOneToCart(props.id)}
          >
            vásárlás
          </button>
        )}
    </div>
  )
}

export default ToCart
