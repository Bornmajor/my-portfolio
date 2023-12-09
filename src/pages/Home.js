import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import typingImage from '../assets/typing.png'
import webImage from '../assets/website.png'
import mobileImg from '../assets/mobile.png'
import skillsImg from '../assets/skills.png'
import { useContext } from 'react'
import MyContext from '../context/context'


function Home() {
    const {setShowContactModal} = useContext(MyContext);
    
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
  return (
    <div class="d-flex  justify-content-center">

    <div class="d-flex flex-column">
    
    <img class="d-flex align-self-center" src={typingImage} id='main_img' />
    <h1 class="text-center">Hey I'm Osborn</h1>
    <h2 class="text-center">Mobile developer | Web developer | UX design | Backend engineer</h2>  
    
    <a role="button" className="btn btn-success m-3 d-flex align-self-center" 
     onClick={() => setShowContactModal(true)}>
      Product inquires
      </a>
    
    
    <div class="quick_links">
    <h4 class="text-center title">Quick links</h4>
    
    <div class="ptf-card">
     
     

    <a  to='/websites' class="card-item link d-flex flex-column justify-content-center link-dark text-decoration-none">
    <img src={webImage} class="img_item d-flex align-self-center"/>
    <h4 class="text-center">Web apps (4)</h4>
    </a>
    
    <a  to='/apps' class="card-item link d-flex flex-column justify-content-center link-dark text-decoration-none">
    <img src={mobileImg} class="img_item d-flex align-self-center" />
    <h4 class="text-center">Mobile apps (1)</h4>
    </a>
    
    <a to="/about" class="card-item link d-flex flex-column justify-content-center link-dark text-decoration-none" >
    <img src={skillsImg} class="img_item d-flex align-self-center" />
    <h4 class="text-center">About me</h4>
    </a>
    
    
    </div>
    
    
    </div>
    
    
    
    
    </div>
    
    </div>
  )
}

export default Home