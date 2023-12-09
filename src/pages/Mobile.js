import React from 'react'
import mobileImg from '../assets/mobile.png'
import docImg from '../assets/documents.png'

function Mobile() {
  return (
    <div className="d-flex justify-content-center">

    <div className="d-flex flex-column">
    <img className="d-flex align-self-center" src={mobileImg} id="main_img"/>
    <h1 className="text-center">Mobile projects</h1>
    
    
    <div className="project_container">


  

    <a href="https://github.com/Bornmajor/share-map-app " className="d-flex flex-column justify-content-center link-dark text-decoration-none card-link">
    <img src={docImg} className="img_item d-flex align-self-center" />
    <h4 className="text-center">Realtime location map sharer</h4>
    <h5 className="text-center">(link + github)</h5>
    </a>


    

    <a href="https://github.com/Bornmajor/find-video-app" className="d-flex flex-column justify-content-center link-dark text-decoration-none card-link">
    <img src={docImg} className="img_item d-flex align-self-center" />
    <h4 className="text-center">Stock video downloader</h4>
    <h5 className="text-center">(link + github)</h5>
    </a>

    <a href="https://github.com/Bornmajor/google-auth-sign-in-app" className="d-flex flex-column justify-content-center link-dark text-decoration-none card-link">
    <img src={docImg} className="img_item d-flex align-self-center" />
    <h4 className="text-center">Social media auth(google)</h4>
    <h5 className="text-center">(link + github)</h5>
    </a>
    
    <a href="https://github.com/Bornmajor/trivia-app" className="d-flex flex-column justify-content-center link-dark text-decoration-none card-link">
    <img src={docImg} className="img_item d-flex align-self-center" />
    <h4 className="text-center">Trivia quiz </h4>
    <h5 className="text-center">(link + github)</h5>
    </a>

    <a href="https://github.com/Bornmajor/music-player" className="d-flex flex-column justify-content-center link-dark text-decoration-none card-link">
    <img src={docImg} className="img_item d-flex align-self-center" />
    <h4 className="text-center">Local music player </h4>
    <h5 className="text-center">(link + github)</h5>
    </a>

    <a href="https://github.com/Bornmajor/movie-rating-app" className="d-flex flex-column justify-content-center link-dark text-decoration-none card-link">
    <img src={docImg} className="img_item d-flex align-self-center" />
    <h4 className="text-center">Music rating app</h4>
    <h5 className="text-center">(link + github)</h5>
    </a>

    <a href=" https://github.com/Bornmajor/sample-weather-app-react-native" className="d-flex flex-column justify-content-center link-dark text-decoration-none card-link">
    <img src={docImg} className="img_item d-flex align-self-center" />
    <h4 className="text-center">Weather app</h4>
    <h5 className="text-center">(link + github)</h5>
    </a>



   

   

    
    
    
    
    
    </div>
    </div>
    </div>
  )
}

export default Mobile