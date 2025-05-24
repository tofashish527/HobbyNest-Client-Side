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
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Context/PrivateRoute';
import UpdateMyGroup from './Pages/UpdateMyGroup';
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
          element:<PrivateRoute><Creategroups></Creategroups></PrivateRoute>,
        },
         {
        path:'/hobbys/:id',
        loader:({params})=>fetch(`http://localhost:3000/hobbys/${params.id}`),
         hydrateFallbackElement:<Spinner></Spinner>,
        element:<PrivateRoute><HobbyDetails></HobbyDetails></PrivateRoute>,
      },
      {
        path:'/updategroup/:id',
        loader:({params})=>fetch(`http://localhost:3000/hobbys/${params.id}`),
        hydrateFallbackElement:<Spinner></Spinner>,
        element:<PrivateRoute><UpdateGroup></UpdateGroup></PrivateRoute>,
      },
      {
  path: "/mygroups/update/:id",
  element: <UpdateMyGroup />,
  hydrateFallbackElement:<Spinner></Spinner>,
  loader: ({ params }) =>
    fetch(`http://localhost:3000/hobbys/${params.id}`)
},

        {
          path:'/mygroups',
          element:<PrivateRoute><Mygroups></Mygroups></PrivateRoute>,
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
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
