import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/index";
import BuildPage from "./pages/build";
import BillPage from "./pages/bill";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/build",
    element: <BuildPage/>
  },
  {
    path: "/bill",
    element: <BillPage/>
  },
  {
    path: "/about",
    element: <AboutPage/>
  },
  {
    path: "/contact",
    element: <ContactPage/>
  }
], 
{
  basename: "/"
}
);