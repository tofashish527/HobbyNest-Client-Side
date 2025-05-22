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
import UpdateGroup from './Pages/UpdateGroup';
import HobbyDetails from './Pages/HobbyDetails';
import Login from './Component/Login';
import Register from './Component/Register';
import Spinner from './Component/Spinner';
const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          loader:()=>fetch('http://localhost:3000/hobbys'),
           hydrateFallbackElement:<Spinner></Spinner>,
          Component:Home,
          index:true,
        },
        {
          path:'/allgroups',
          Component:Allgroups,
           loader: async () => fetch('http://localhost:3000/hobbys'),
            hydrateFallbackElement:<Spinner></Spinner>,
        },
        {
          path:'/creategroups',
          Component:Creategroups,
        },
         {
        path:'/hobbys/:id',
        loader:({params})=>fetch(`http://localhost:3000/hobbys/${params.id}`),
         hydrateFallbackElement:<Spinner></Spinner>,
        Component:HobbyDetails,
      },
      {
        path:'/updategroup/:id',
        loader:({params})=>fetch(`http://localhost:3000/hobbys/${params.id}`),
        hydrateFallbackElement:<Spinner></Spinner>,
        Component:UpdateGroup,
      },
        {
          path:'/mygroups',
          Component:Mygroups,
        },
        {
          path:'/login',
          Component:Login,
        },
        {
          path:'/register',
          Component:Register,
        }


      ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
