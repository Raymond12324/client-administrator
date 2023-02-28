import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import NewClient from "./components/NewClient";
import Index, { loader as clientLoader } from "./pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "clientes/nuevoCliente",
        element: <NewClient />,
      },
      {
        path: "/",
        element: <Index />,
        loader: clientLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
