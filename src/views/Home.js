import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import typingImage from '../assets/images/typing.png'
import webImage from '../assets/images/website.png'
import mobileImg from '../assets/images/mobile.png'
import skillsImg from '../assets/images/skills.png'
import meImg from '../assets/images/edited_me.png'
import { useContext } from 'react'
import MyContext from '../context/context'
import DribbbleShots from '../components/DribbbleShots'
import { Helmet } from 'react-helmet';


function Home() {
    const {setShowContactModal,projectData} = useContext(MyContext);
    const [noMobileProjects,setNoMobileProjects] = useState(10);
    const [noWebProjects,setNoWebProjects] = useState(24)

    
    const navigate= useNavigate();
    useEffect(()=>{
      const links = document.querySelectorAll('.link');
      links.forEach(link => {
        link.addEventListener('click',function handleClick(event){
          console.log('clicked');
         const target = link.getAttribute('to');
         navigate(target);
    
        })
      })
      },[]);

      const mobileProjects = projectData.filter(project => project.projectType === 'mobile').sort((a, b) => b.id - a.id); // Sort in descending order of id;
      const webProjects = projectData.filter(project => project.projectType === 'website').sort((a, b) => b.id - a.id); // Sort in descending order of id;

  return (
    <>
    <Helmet>
    <title>Osborn Maja | Home</title>
    <meta name="description" content="Explore the diverse projects and skills of a passionate Mobile Developer, Web Developer, UX Designer, and Backend Engineer" />
    <meta name="robots" content="index, follow" />
    </Helmet>

    <div class="d-flex  justify-content-center">

    <div class="d-flex flex-column">
    
    <img class="d-flex align-self-center" src={typingImage} style={{maxWidth:'350px'}} id='main_img' />
    <h1 class="text-center">Hey I'm Osborn</h1>
    <h2 class="text-center">Mobile developer | Web developer | UX designer | Backend engineer</h2>  
    
    <a role="button" className="btn btn-success m-3 d-flex align-self-center" 
     onClick={() => setShowContactModal(true)}>
    Software Inquiry
      </a>
    
    
    <div class="quick_links">
    <h4 class="text-center title">Quick links</h4>
    
    <div class="ptf-card">
     
     

    <a  to='/websites' class="card-item link d-flex flex-column justify-content-center link-dark text-decoration-none">
    <img src={webImage}  style={{width:'150px'}} class="d-flex align-self-center"/>
    <h4 class="text-center">Web apps ({noWebProjects ? noWebProjects : webProjects.length})</h4>
    </a>
    
    <a  to='/apps' class="card-item link d-flex flex-column justify-content-center link-dark text-decoration-none">
    <img src={mobileImg}  style={{width:'150px'}} class="d-flex align-self-center" />
    <h4 class="text-center">Mobile apps ({noMobileProjects ? noMobileProjects :mobileProjects.length})</h4>
    </a>
    
    <a to="/about" class="card-item link d-flex flex-column justify-content-center link-dark text-decoration-none" >
    <img src={skillsImg}  style={{width:'150px'}} class="d-flex align-self-center" />
    <h4 class="text-center">About me</h4>
    </a>
    
    
    </div>
    
    
    </div>
    
    
    
    
    </div>
  
      
    </div>
    <div className='mt-5'>
     <DribbbleShots /> 
    </div>


    </>
    
  )
}

export default Home