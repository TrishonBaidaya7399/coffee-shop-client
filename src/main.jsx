import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCoffee from './Components/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee.jsx';
import Root from './Routes/Root.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Users from './Components/Users/Users.jsx';


const router = createBrowserRouter([
 {
  path: '/',
  element: <Root/>,
  errorElement: <App/>,
  children: [
    {
      path: "/",
      element: <App/>,
      loader: ()=>fetch('https://coffee-shop-server-nine.vercel.app/coffee')
    },
    {
      path: "/addcoffee",
      element: <AddCoffee/>,
    },
    {
      path: "/updateCoffee/:id",
      element: <UpdateCoffee/>,
      loader: ({params})=> fetch(`https://coffee-shop-server-nine.vercel.app/coffee/${params.id}`)
    },
    {
      path: "/users",
      element: <Users/>,
      loader: ()=>fetch("https://coffee-shop-server-nine.vercel.app/user")
    },
    {
      path: "/signup",
      element: <SignUp/>
    },
    {
      path: "/signin",
      element: <SignIn/>
    },
  ]
 }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
