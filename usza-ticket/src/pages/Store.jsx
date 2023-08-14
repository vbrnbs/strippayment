import React from "react";
import Show from "../components/Show";
import { productsArray } from "../productsArray";

const Store = () => {
  return (
    <div className="flex mt-12 justify-center">
      <div className="max-w-4xl">
        {productsArray.map((product, idx) => (
          <Show
            key={idx}
            id={product.id}
            image={product.image}
            title={product.title}
            desc={product.description}
            time={product.time}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
