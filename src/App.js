import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './layouts/Root';
import Home from './views/Home';
import Mobile from './views/Mobile';
import Websites from './views/Websites';
import About from './views/About';
import ErrorPage from './views/ErrorPage';
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/js/all'
import { MyContextProvider } from './context/context';
import { useState,useEffect } from 'react';
import PageSkeleton from './components/PageSkeleton';
import $ from 'jquery';
import Project from './views/Project';
import Dribble from './views/Dribble';



function App() {
 
  

  const router = createBrowserRouter([
    {
    path:'/',  
    element : <Root />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:'/apps',
        element:<Mobile/>
      },
      {
        path:'/websites',
        element:<Websites/>
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:"/project/:projectId",
        element:<Project />
      },
      {
        path:'/dribbble/:dribbbleId',
        element:<Dribble />
       
      }
   
    ],
    errorElement: <ErrorPage/>
  }
  

  ]);
  return (
    <MyContextProvider>
      <RouterProvider router={router}/>  
    </MyContextProvider>
  
  );
}

export default App;
