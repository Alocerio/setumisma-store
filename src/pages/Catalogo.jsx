import React from "react";
import CatalogoList from "../components/Catalogo/CatalogoList";

const Catalogo = ({ catalogo, setCart, cart }) => {
  return (
    <div className="flex flex-col justify-center  items-center">
      <div>
        <h1 className="font-bold text-3xl mt-8 sm:mt-11">🛍 Tienda</h1>
      </div>
      <CatalogoList catalogo={catalogo} />
    </div>
  );
};

export default Catalogo;
