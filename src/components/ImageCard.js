import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import trendImg from '../assets/images/trends.png'

const ImageCard = ({image_url}) => {
    const [isImageOk,setIsImageOk] = useState(false);

    if(image_url == null){
      image_url = trendImg;
    }


  return (
    <Card.Img variant="top" src={isImageOk ? image_url : trendImg} 
    onError={(event) => {
     // Handle broken image: set a different src, log an error, etc.
     console.error("Image failed to load:", event.target.src);
      setIsImageOk(false);
   }}
   onLoad={() =>{
    //fully loaded
    setIsImageOk(true);
   }}
   />
  )
}

export default ImageCard