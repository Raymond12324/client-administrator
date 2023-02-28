import React from "react";
import { useLoaderData } from "react-router-dom";
import { clientes } from "../data/clientes";

export const loader = () => {
    return clientes;
}

const Index = () => {
    const datos = useLoaderData()
    console.log(datos)
  return (
    <>
      <h1 className="text-5xl text-blue-900 font-bold text-center">Clientes</h1>
    </>
  );
};

export default Index;
