import React from 'react'
import ln from '../assets/ln.png'
import git from '../assets/git.png'
import ig from '../assets/ig.png'
import fb from '../assets/fb.png'

function Footer() {
  return (
    <footer>

    <h5>Majasociet Software Company</h5>

    <div className='footer_links_container'>
    <a href="https://www.linkedin.com/in/osborn-maja-8811a81b3/" className='footer-links'><img src={ln} alt="" width='25'/></a>
    <a href="https://github.com/Bornmajor" className='footer-links'><img src={git} alt="" width='25'/></a>
    <a href="https://www.instagram.com/majasociet969/" className='footer-links'><img src={ig} alt="" width='25'/></a>
    <a href="https://www.facebook.com/profile.php?id=100094315064093" className='footer-links'><img src={fb} alt="" width='25'/></a>

    </div>
    </footer>
  )
}

export default Footer