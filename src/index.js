import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import  Home  from "./pages/home";
import  Details  from "./pages/details";
import  Products  from "./pages/products";
import  Login  from "./pages/login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Not Found</h1>
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

