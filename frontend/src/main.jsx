import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import '../public/styles.css'
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";
import { router } from './router';

import Header from "./components/header";
import Footer from "./components/footer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
