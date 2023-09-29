import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./component/App.css";
import Home from "./pages/homepage.js";
import NotFound from "./pages/notFound";
// AOS ANIMATED
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Homepage = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={Homepage} />
  </React.StrictMode>
);
