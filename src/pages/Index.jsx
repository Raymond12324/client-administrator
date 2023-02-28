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
      <p className="mt-3 text-center font-bold">Administra tus Clientes</p>

      {clientes.length ? (
        <table className="w-full bg-white shadow-lg mt-5 table-auto">
            <thead className="bg-blue-800 text-white">
                <tr>
                    <th className="p-2">Cliente</th>
                    <th className="p-2">Contacto</th>
                    <th className="p-2">Acciones</th>
                    <th className="p-2">empresa</th>
                </tr>
            </thead>
            <tbody >
                {clientes.map( cliente => (
                    <tr className="text-center ">
                       <td className="p-2">
                       {cliente.nombre}
                        </td> 
                       <td className="p-2">
                       {cliente.telefono}
                        </td> 
                       <td className="p-2">
                       {cliente.email}
                        </td> 
                        
                       <td className="p-2">
                       {cliente.empresa}
                        </td> 
                        
                    </tr>


                    
                  
                ))}
            </tbody>
        </table>
      ):(
        <p>Prueba</p>
      )}
    </>
  );
};

export default Index;
