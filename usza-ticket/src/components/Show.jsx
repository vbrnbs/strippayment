import { CartContext } from "../CartContext";
import { useContext } from "react";
import ShowModal from "./ShowModal";

const Show = ({ id, image, title, location, desc, time, full, kedv }) => {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(id);

  return (
    <>
      <a href={`#show-modal-${id}`}>
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
          }}
          className="w-full h-72 flex justify-between bg-fill rounded-xl hover:scale-105 ease-in-out duration-300 cursor-pointer"
        >
          <div className="py-2 pl-2 text-white">
            <div className="text-sm">{time}</div>
            <div className="text-xl font-bold">{title}</div>
            <div className="text-xl font-bold">{location}</div>
          </div>
          <div className="w-1/4 flex justify-end items-end p-2">
            {/* <ToCart id={id} productQuantity={productQuantity} /> */}
          </div>
        </div>
        <div>
        <ShowModal
          id={id}
          image={image}
          title={title}
          desc={desc}
          time={time}
          full={full}
          kedv={kedv}
          location={location}
        />
        </div>
      </a>
    </>
  );
};

export default Show;
