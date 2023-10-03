import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from "./pages/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
