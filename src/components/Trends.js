import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import newsdatapi from '../api/newsdatapi';
import DummyBlogs from './DummyBlogs';
import ImageCard from './ImageCard';
import TrendCard from './TrendCard';
import HorizontalScrollable from './HorizontalScrollable';

function Trends() {

  const [newsData,setNewsData] = useState([]);
  const [n,setN] = useState(false);

  const getNewsData = async() =>{
    const response = await newsdatapi();
    setNewsData(response.data.results);
    setN(true);



  }

  const scrollBlogRight = () =>{

    const  scrollableDiv = document.getElementById('trends');
      scrollableDiv.scrollLeft += 250;


  }

  const scrollLeftRight= () =>{
    const scrollableDiv = document.getElementById('trends');
    // Scroll distance in pixels
    scrollableDiv.scrollLeft -= 250;

   
  }

  useEffect(()=>{
  getNewsData();
  },[n])

  return (
    <div className='blogContainer'>

      <h1 className="text-center title">Trending</h1>

  

      <HorizontalScrollable>

      {n ?
       newsData.map((item) =>{
        return(
      <TrendCard 
      width="250px"
       item={item}
        /> 
        )
         
       })
       
      
      :
      <DummyBlogs />
      }
      </HorizontalScrollable>

   
    
    </div>
  
  )
}

export default Trends;



