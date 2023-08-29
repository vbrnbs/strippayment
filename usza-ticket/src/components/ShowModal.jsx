import ToCart from "./ToCart";
import { CartContext } from "../CartContext";
import { useContext } from "react";

const ShowModal = ({ id, image, title, location, desc, time, full, kedv }) => {
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
          {location}
          <ToCart full={full} kedv={kedv} />
          <div className="mb-2">
            <div className="modal-action">
              <a
                href="#"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                x
              </a>
            </div>
            <div className="modal-action mb-2">
              <a href="#" className="btn">
                folytatom a vasarlast
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowModal;
