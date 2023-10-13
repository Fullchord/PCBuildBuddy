import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";

import HomePage from "./pages/index";
import BuildPage from "./pages/build";

import Header from "./components/header";
import Footer from "./components/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/build",
    element: <BuildPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Header/>
      <main>
        <RouterProvider router={router}/>
      </main>
      <Footer/>
      </Provider>
  </React.StrictMode>,
)
