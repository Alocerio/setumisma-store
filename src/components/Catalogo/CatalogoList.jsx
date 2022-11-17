import React from "react";
import CatalogoCard from "./CatalogoCard";

const CatalogoList = ({ catalogo, setCart, cart }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex  flex-wrap m-4">
          {catalogo.map((item) => {
            const { name, precio, tipo, stock } = item;
            return (
              <CatalogoCard
                setCart={setCart}
                cart={cart}
                key={name}
                name={name}
                tipo={tipo}
                stock={stock}
                precio={precio}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CatalogoList;
