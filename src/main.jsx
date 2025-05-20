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
const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    errorElement:<h1>Error Occured! :(</h1>,
      children:[
        {
          path:'/',
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
