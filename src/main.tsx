import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import './style/DatePicker.css';
import './style/Calendar.css';
import "./style/output.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-up",
    element: <App signUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
