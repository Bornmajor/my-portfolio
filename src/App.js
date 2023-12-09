import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import Mobile from './pages/Mobile';
import Websites from './pages/Websites';
import About from './pages/About';
import './css/bootstrap.min.css'
import './css/style.css'
import './js/all'
import { MyContextProvider } from './context/context';


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
      }
    ]
  }
  

  ]);
  return (
    <MyContextProvider>
     <RouterProvider router={router}/> 
    </MyContextProvider>
  
  );
}

export default App;
