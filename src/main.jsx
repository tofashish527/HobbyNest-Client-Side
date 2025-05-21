import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Mainlayout from './Layout/Mainlayout';
import Home from './Component/Home';
import Allgroups from './Pages/Allgroups';
import Creategroups from './Pages/Creategroups';
import Mygroups from './Pages/Mygroups';
import Error from './Component/Error';
const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          loader:()=>fetch('http://localhost:3000/hobbys'),
          Component:Home,
          index:true,
        },
        {
          path:'/allgroups',
          Component:Allgroups,
        },
        {
          path:'/creategroups',
          Component:Creategroups,
        },
        {
          path:'/mygroups',
          Component:Mygroups,
        },
      ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
