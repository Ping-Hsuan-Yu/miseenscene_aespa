import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/DatePicker.css";
import "./style/Calendar.css";
import "./style/output.css";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

function Redirect() {
  const navigate = useNavigate();
  useEffect(() => {
    const path = window.location.search.substring(1); // 取得 ? 之後的內容
    if (path) {
      navigate(path, { replace: true });
    }
  }, [navigate]);
  return null;
}

const router = createBrowserRouter([
  {
    path: "/miseenscene_aespa/",
    element: <App />,
  },
  {
    path: "/miseenscene_aespa/sign-up",
    element: <App signUp />,
  },
  {
    path: "/miseenscene_aespa/*",
    element: <Redirect />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
