import ToCart from "./Tocart";
import { CartContext } from "../CartContext";
import { useContext } from "react";


const ShowModal = ({ id, image, title, location, desc, time, price }) => {

    const cart = useContext(CartContext);

  return (
    <div>
     <div id={`show-modal-${id}`} className="modal">
      {/* <div id="show-modal" className="modal"> */}
        <div className="modal-box">
          {id}
          <img src={image} alt="title" />
          {title}
          {desc}
          {time}
          {price}
          {location}
          <ToCart id={id} />
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

export default ShowModal;
