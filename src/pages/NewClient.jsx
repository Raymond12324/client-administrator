import React from "react";
import Formulario from "../components/Formulario";

const NewClient = () => {
  return (
    <>
      <h1 className="text-5xl text-blue-900 text-center font-bold">Crear cliente</h1>
      <div className="bg-white shadow-lg rounded-md md-3/4 mx-auto px-5 p-6 mt-10">

      <Formulario/>
      </div>
    </>
  );
};

export default NewClient;
