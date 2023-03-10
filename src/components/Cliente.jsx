import React from "react";

const Cliente = ({ cliente }) => {
  const { id, nombre, telefono, email, empresa } = cliente;
  return (
    <>
      <tr className="border-b">
        <td className="p-6 space-y-2">
          <p className="text-2xl text-gray-800">{nombre}</p>
          <p>{empresa}</p>
        </td>
        <td className="p-6">
          <p className="text-gray-600">
            <span className="text-gray-800 uppercase font-bold">Email: </span>
            {email}
          </p>
          <p className="text-gray-600">
            <span className="text-gray-800 uppercase font-bold">Tel: </span>
            {telefono}
          </p>
        </td>
        <td className="p-6 flex gap-3">
            <button type="button" className="text-blue-600 hover:text-blue-800 uppercase font-bold text-xs btn ">Editar</button>
            <button type="button" className="text-red-600 hover:text-red-800 uppercase font-bold text-xs btn">Eliminar</button>
        </td>
      </tr>
      {/* <tr>
        <th>{nombre}</th>
      </tr>
      <tr>
        <th>{telefono}</th>
      </tr>
      <tr>
        <th>{email}</th>
      </tr>
      <tr>
        <th>{empresa}</th>
      </tr> */}
    </>
  );
};

export default Cliente;
