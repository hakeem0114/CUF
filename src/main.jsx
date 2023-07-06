//React Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";   //CHANGE TO ROUTER PROVIDER

//Page Imports

//Component Imports 
import App from './App.jsx'

//Style Imports
import './index.css'


/********MAIN SETUP******/  //Refactor to add in the useLoader() & the new routing(parent route, Outlet...)
const router = createBrowserRouter([
  {
    path: "/CUF",
    element: (<App />),
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
