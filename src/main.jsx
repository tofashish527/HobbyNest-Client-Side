import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Mainlayout from './Layout/Mainlayout';
const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    errorElement:<h1>Error Occured! :(</h1>,
      children:{
        
      }
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
