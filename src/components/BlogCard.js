import React from 'react'
import ImageCard from './ImageCard'
import { Card } from 'react-bootstrap'


const BlogCard = ({item,width}) => {
  return (
    <Card className='blogCard myBlogCard'  style={{width:width,borderLeft:'2.5px solid green',borderRadius:'5px'}}>
    <a href={item.url} className='text-decoration-none' style={{color:'black'}}>
   
    <Card.Body>
    
    <Card.Title  style={{fontWeight:'800'}}>
    {
     item.title
     }
     </Card.Title>
    <Card.Text  className='text-secondary' style={{color:'#4f4a4a',marginTop:'10px',fontSize:'14px'}} >
    by Osborn Maja
    </Card.Text>
    <Card.Text className='text-muted' style={{fontSize:'12px'}}>
       {item.published.split("T")[0]} 
  
    </Card.Text>
    </Card.Body>  
    </a>
    </Card>    
    
   
  )
}

export default BlogCard