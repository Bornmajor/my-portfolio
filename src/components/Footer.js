import React, { useContext } from 'react'
import ln from '../assets/images/ln.png'
import git from '../assets/images/git.png'
import ig from '../assets/images/ig.png'
import fb from '../assets/images/fb.png'
import codetags from '../assets/images/html.png'
import { Link } from 'react-router-dom'
import MyContext from '../context/context'

function Footer() {
  const {setShowContactModal} = useContext(MyContext)
  return (
    <footer>

    <h5> <img src={codetags} width={35} /> Majasociet Software Company</h5>
 
    <div className='ms-2'>

    <span className="footer-single-item">
      <i class="fas fa-map-marker-alt" style={{fontSize:'20px'}}></i> Mombasa, Kenya
      </span> 

      <span className="footer-single-item">
       <i class="fas fa-envelope" style={{fontSize:'20px'}}></i> <a  href="mailto:osbornmaja@gmail.com">osbornmaja@gmail.com</a>  
      </span>
      
      <span className="footer-single-item">
        <i class="fas fa-phone-alt" style={{fontSize:'20px'}}></i> 254 726 710 303
      </span>
      
 


    </div>

    <div className='inner-container sitemaps'>

      <Link className='link' to={'/websites'}>Website</Link>
      <Link className='link' to="/apps">Apps</Link>
      <Link className='link' to="/about">Skills</Link>
      <Link className='link'  onClick={() =>setShowContactModal(true) }>Inquires</Link>


    </div>


     <div className='footer_icons_container'>
    <a href="https://www.linkedin.com/in/osborn-maja-8811a81b3/" className='footer-links'><img src={ln} alt="" width='40'/></a>
    <a href="https://github.com/Bornmajor" className='footer-links'><img src={git} alt="" width='40'/></a>
    <a href="https://www.instagram.com/majasociet969/" className='footer-links'><img src={ig} alt="" width='40'/></a>
    <a href="https://www.facebook.com/profile.php?id=100094315064093" className='footer-links'><img src={fb} alt="" width='40'/></a>

    </div>

    </footer>
  )
}

export default Footer