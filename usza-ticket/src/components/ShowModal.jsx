import ToCart from "./Tocart";
import { CartContext } from "../CartContext";
import { useContext } from "react";


const ShowModal = ({ id, image, title, location, desc, time, price }) => {

    const cart = useContext(CartContext);


  return (
    <div>
      <div id="show-modal" class="modal">
        <div class="modal-box">
          {id}
          <img src={image} alt="title" />
          {title}
          {desc}
          {time}
          {price}
          {location}
          <ToCart id={id} />
          <div class="modal-action">
            <a
              href="#"
              class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
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
