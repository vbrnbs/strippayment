import React from "react";
import Show from "../components/Show";
import Footer from "../components/Footer";
import { productsArray } from "../productsArray";
import Hero from "../components/Hero";
import Drawer from "../components/Drawer";

const Store = () => {
  return (
    <>
      <div className="flex mt-12 justify-center">
      {/* <Drawer /> */}
        <Hero />
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
          {productsArray.map((product, idx) => (
            <Show
              key={idx}
              id={product.id}
              image={product.image}
              title={product.title}
              desc={product.description}
              time={product.time}
              full={product.full}
              kedv={product.kedv}
              location={product.location}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Store;
