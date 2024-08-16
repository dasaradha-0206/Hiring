import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar';
import AddDetails from './adddetails';
import CheckDetails from './checkdetails';
import Home from './home';
import { BrowserRouter, createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
const AppLayout=()=>{
  return <div>
  <Navbar/>
  <Outlet/>
  </div>

}
const ways=createBrowserRouter(
  [
    {
      path:'/',
      element:<AppLayout/>,
      children:[
        {
          path:'/home',
          element:<Home/>
    
        },
        
        {
          path:'/adddetails',
          element:<AddDetails/>,
        },
        {
          path:'/checkdetails',
          element:<CheckDetails/>,
        }
        
      ]

    },
    
  ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ways}/>);


 