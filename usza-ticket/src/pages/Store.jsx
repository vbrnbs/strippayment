import React from "react";
import Show from "../components/Show";
import Footer from "../components/Footer";
import { productsArray } from "../productsArray";

const Store = () => {
  return (
    <>
      <div className="flex mt-12 justify-center bg-base-300">
        <div className="w-3/4 lg:w-1/2">
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
      <Footer />
    </>
  );
};

export default Store;
