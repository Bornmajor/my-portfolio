import React from 'react'
import webImg from '../assets/website.png'
import docImg from '../assets/documents.png'

function Websites() {
  return (
    <div className="d-flex  justify-content-center">

<div className="d-flex flex-column">
<img className="d-flex align-self-center" src={webImg} id="main_img"/>
<h1 className="text-center">Web projects</h1>


<div className="project_container">

<a href="https://ambassadorschapeldaily.000webhostapp.com/"  className="d-flex flex-column justify-content-center link-dark text-decoration-none card-link">
<img src={docImg} className="img_item d-flex align-self-center" />
<h4 className="text-center">Church website</h4>
<h5 className="text-center">(demo)</h5>
</a>


<a href="https://github.com/Bornmajor/share-location-api"  className="d-flex flex-column justify-content-center link-dark text-decoration-none card-link">
<img src={docImg} className="img_item d-flex align-self-center" />
<h4 className="text-center">Share location api</h4>
<h5 className="text-center">(demo)</h5>
</a>

<a href="https://github.com/Bornmajor/to-do-web-app" class="d-flex flex-column justify-content-center link-dark text-decoration-none card-link" >
<img src={docImg} class="img_item d-flex align-self-center"  />
<h4 className="text-center">To do app</h4>
<h5 className="text-center">(github)</h5>
</a>


<a href="https://github.com/Bornmajor/mini-paypal-web-app" class="d-flex flex-column justify-content-center link-dark text-decoration-none card-link" >
<img src={docImg} class="img_item d-flex align-self-center"/>
<h4 class="text-center">E-banking</h4>
<h5 className="text-center">(github)</h5>
</a>

<a href="https://github.com/Bornmajor/video-sharing-web-app" class="d-flex flex-column justify-content-center link-dark text-decoration-none card-link">
<img src={docImg} class="img_item d-flex align-self-center"  />
<h4 class="text-center">Video sharing web-app</h4>
<h5 className="text-center">(demo)</h5>
</a>

<a href="https://osbormaja.000webhostapp.com/quiz_system/" class="d-flex flex-column justify-content-center link-dark text-decoration-none card-link">
<img src={docImg} class="img_item d-flex align-self-center"  />
<h4 class="text-center">Multichoice exam</h4>
<h5 className="text-center">(demo)</h5>
</a>





</div>

</div>
</div>
  )
}

export default Websites