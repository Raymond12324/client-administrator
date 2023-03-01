import React from "react";
import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { clientes } from "../data/clientes";

export const loader = () => {
  return clientes;
};

const Index = () => {
  const datos = useLoaderData();
  console.log(datos);
  return (
    <>
      <h1 className="text-5xl text-blue-900 font-bold text-center">Clientes</h1>

      <table className="w-full bg-white shadow-lg mt-5 table-auto">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Cliente</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
        {datos.map((cliente) => (
        <Cliente key={cliente.id} cliente={cliente} />
      ))}
        </tbody>
      </table>

      
    </>
  );
};

export default Index;
