import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './output.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/miseenscene_aespa/",
    element: <App />,
  },
  {
    path: "/miseenscene_aespa/sign-up",
    element: <App signUp/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
