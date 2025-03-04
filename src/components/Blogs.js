import React, { useEffect, useState } from 'react'
import bloggerapi from '../api/bloggerapi'
import BlogCard from './BlogCard';
import HorizontalScrollable from './HorizontalScrollable';


const Blogs = () => {
    
    const [blogs,setBlogs] = useState([]);
    const [n,setN] = useState('');
    const [errorBlog,setErrorBlog] = useState("");

    useEffect(()=>{
    getMyBlogs();
    },[n]);

    const getMyBlogs = async() =>{
        try{
        const response = await bloggerapi();
        setBlogs(response.data.items);
        setN("Ok");
        console.log(response.data.items);


        }catch(err){
          setErrorBlog("Blogs unavailable");  

        }
    }




  return (
    <>
 
    {blogs.length !== 0 &&
         <div>
        <h1 className="text-center title">Blogs</h1>

        <HorizontalScrollable>
        {n && (
               blogs.map((item) => {
                return(
                  <BlogCard item={item} width="18rem" />   
                )
               

            })   
            )
          
            
              }
</HorizontalScrollable>

       
       
    </div>
    }

    
    </>
   
    
   
 
       
   
  )
}

export default Blogs