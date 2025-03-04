import React from 'react'
import Card from 'react-bootstrap/Card';
import trendImg from '../assets/images/trends.png'

const DummyBlogs = () => {
  return (
    <div className='blogCardContainer' id="blogScrollBar">
 

  

  <Card className='trendCard' style={{width:'280px'}} >
         <a href='https://hbr.org/2022/11/how-generative-ai-is-changing-creative-work' className='text-decoration-none' style={{color:'black'}}>
            <Card.Img variant="top" src="https://www.zdnet.com/a/img/resize/1a8d2c93f1f51f9f33d21d7224840dfcf06f5a50/2023/02/14/328d5be2-918d-4aee-8690-875aed4a8c8a/gettyimages-1458045238-1.jpg?auto=webp&width=1280" />
           <Card.Body>
           <Card.Title  className='text-truncate d-block' style={{maxWidth:'17rem',fontSize:'15px'}}>
            How Generative AI Is Changing Creative Work</Card.Title>
           <Card.Text className="text-muted" style={{fontSize:'12px'}}>
            {new Date().toLocaleDateString()}
           </Card.Text>
   
           </Card.Body>  
         </a>
   </Card>  

     <Card className='trendCard'  style={{width:'280px'}}>
         <a href='https://www.ibm.com/topics/quantum-computing' className='text-decoration-none' style={{color:'black'}}>
            <Card.Img variant="top" src="https://gmo-research.com/application/files/5716/6080/5815/Quantum_Computing_Image.png" />
           <Card.Body>
           <Card.Title  className='text-truncate d-block' style={{maxWidth:'17rem',fontSize:'15px'}}>
            Quantum computing</Card.Title>
           <Card.Text className="text-muted" style={{fontSize:'12px'}}>
            {new Date().toLocaleDateString()}
           </Card.Text>
   
           </Card.Body>  
         </a>
   </Card>   

   <Card className='trendCard' style={{width:'280px'}} >
         <a href='https://www.techtarget.com/whatis/feature/The-metaverse-explained-Everything-you-need-to-know#:~:text=A%20short%20history,not%20in%20the%20physical%20world.' className='text-decoration-none' style={{color:'black'}}>
            <Card.Img variant="top" src="https://www.searchenginejournal.com/wp-content/uploads/2023/04/the-metaverse-what-is-it-2-64412b87eaf6c-sej-1520x800.webp" />
           <Card.Body>
           <Card.Title  className='text-truncate d-block' style={{maxWidth:'17rem',fontSize:'15px'}}>
           What is the metaverse?
            </Card.Title>
           <Card.Text className="text-muted" style={{fontSize:'12px'}}>
            {new Date().toLocaleDateString()}
           </Card.Text>
   
           </Card.Body>  
         </a>
   </Card>  

   

   <Card className='trendCard' style={{width:'280px'}}  >
         <a href='https://hbr.org/2022/05/what-is-web3' className='text-decoration-none' style={{color:'black'}}>
            <Card.Img variant="top" src="https://assets.weforum.org/article/image/responsive_big_webp_0R7BdnZl_gyeWOKsudAVmI7gNR673V4BIxQM6gwT-FY.webp" />
           <Card.Body>
           <Card.Title  className='text-truncate d-block' style={{maxWidth:'17rem',fontSize:'15px'}}>
           Web3
            </Card.Title>
            <Card.Text className="text-muted" style={{fontSize:'12px'}}>
            {new Date().toLocaleDateString()}
           </Card.Text>
   
           </Card.Body>  
         </a>
   </Card>   

   <Card className='trendCard' style={{width:'280px'}} >
         <a href='https://builtin.com/robotics' className='text-decoration-none' style={{color:'black'}}>
            <Card.Img variant="top" src="https://www.devopsschool.com/blog/wp-content/uploads/2023/05/image-300.png" />
           <Card.Body>
           <Card.Title  className='text-truncate d-block' style={{maxWidth:'17rem',fontSize:'15px'}}>
            Robotics
            </Card.Title>
           <Card.Text className="text-muted" style={{fontSize:'12px'}}>
            {new Date().toLocaleDateString()}
           </Card.Text>
   
           </Card.Body>  
         </a>
   </Card>   

   <Card className='trendCard' style={{width:'280px'}}  >
         <a href='https://semaphoreci.com/blog/low-code-no-code-development-tools' className='text-decoration-none' style={{color:'black'}}>
            <Card.Img variant="top" src="https://hashstudioz.com/blog/wp-content/uploads/2022/07/low-code-No-code-vs-Custom-App-Development-1200x630.png" />
           <Card.Body>
           <Card.Title  className='text-truncate d-block' style={{maxWidth:'17rem',fontSize:'15px'}}>
           Low-Code and No-Code Development Tools
            </Card.Title>
       
            <Card.Text className="text-muted" style={{fontSize:'12px'}}>
            {new Date().toLocaleDateString()}
           </Card.Text>
   
           </Card.Body>  
         </a>
   </Card>   


   <Card className='trendCard' style={{width:'280px'}} >
         <a href='https://www.accenture.com/us-en/insights/cloud/edge-computing-index' className='text-decoration-none' style={{color:'black'}}>
            <Card.Img variant="top" src="https://vpsie.com/wp-content/uploads/2022/11/What-is-EDGE-Computing-2.png.webp" />
           <Card.Body>
           <Card.Title className='text-truncate d-block' style={{maxWidth:'17rem',fontSize:'15px'}}>Edge Computing</Card.Title>
           <Card.Text className="text-muted" style={{fontSize:'12px'}}>
            {new Date().toLocaleDateString()}
           </Card.Text>
   
           </Card.Body>  
         </a>
   </Card>   


     <Card className='trendCard' style={{width:'280px'}} >
         <a href='https://www.cloudflare.com/learning/serverless/what-is-serverless/' className='text-decoration-none' style={{color:'black'}}>
            <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*kvYDcS71SZXcyP_yeqQMww.png" />
           <Card.Body>
           <Card.Title className='text-truncate d-block' style={{maxWidth:'17rem',fontSize:'15px'}}>Serverless Computing</Card.Title>
           <Card.Text className="text-muted" style={{fontSize:'12px'}}>
            {new Date().toLocaleDateString()}
           </Card.Text>
   
   
           </Card.Body>  
         </a>
   </Card>  






  




  
  </div>
  )
}

export default DummyBlogs