import React from 'react'
import ImageCard from './ImageCard'
import { Card } from 'react-bootstrap'

const TrendCard = ({item,width}) => {

  return (
 <Card className='trendCard' style={{width:width}} >
<a href={item.link} className='text-decoration-none' style={{color:'black'}}>
<ImageCard image_url={item.image_url}/>

<Card.Body className='' style={{wordWrap:'break-word'}}>
<Card.Title  className='card-title text-truncate d-block' style={{maxWidth:'17rem',fontSize:'15px'}}>
 {
 item.title
 }

 </Card.Title>
{/* <Card.Text className='' style={{marginTop:'10px',fontSize:'14px'}} >
 {
  item.creator !== null ?
 item.creator.map((user)=>{
    <div className='text-muted' style={{fontSize:'12px'}} >{user}</div>
   }):
   <div>{item.source_id}</div>
   }
</Card.Text> */}
<Card.Text className='card-subtitle' style={{fontSize:'12px'}}>
{item.pubDate.slice(0,item.pubDate.indexOf(" "))}
</Card.Text>
</Card.Body>  
</a>
</Card>    
  )
}

export default  TrendCard;
// {creator !== null ? 
//   <div className='creator'>{creator.map((user)=>{
//     <div>{user}</div>
//   })}</div>:
//  <div>{source_id}</div> 
//<div>{pubDate.slice(0,pubDate.indexOf(" "))}</div>
// }