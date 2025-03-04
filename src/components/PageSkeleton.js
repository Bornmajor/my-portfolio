import React from 'react'
import skeletonImg from '../assets/images/skeleton_bg.png'
import docImg from '../assets/images/documents.png'

const PageSkeleton = () => {
  return (
    <div>
        <div class="skeleton navbar_skeleton"></div>

        <div class="d-flex  justify-content-center">

<div class="d-flex flex-column">

<img class="d-flex align-self-center" src={skeletonImg} id='main_img' />
<h4 class="text-center">Page loading...</h4>

<div class="skeleton text_skeleton"  style={{width:'50%'}}></div>
<div class="skeleton text_skeleton" style={{width:'100%'}}></div>

<div class="skeleton text_skeleton"  style={{width:'50%',borderRadius:'10px',margin:'20px'}}></div>


<div class="quick_links">

<div class="skeleton text_skeleton"  style={{width:'50%'}}></div>

<div class="ptf-card">
 
<a style={{margin:'30px'}} to='/websites' class="card-item link d-flex flex-column justify-content-center link-dark text-decoration-none">
<img src={docImg} class="img_item d-flex align-self-center"/>
<h4 class="text-center">...</h4>
</a>

<a  style={{margin:'30px'}} to='/apps' class="card-item link d-flex flex-column justify-content-center link-dark text-decoration-none">
<img src={docImg} class="img_item d-flex align-self-center" />
<h4 class="text-center">...</h4>
</a>

<a style={{margin:'30px'}} to="/about" class="card-item link d-flex flex-column justify-content-center link-dark text-decoration-none" >
<img src={docImg} class="img_item d-flex align-self-center" />
<h4 class="text-center">...</h4>
</a>
    


</div>


</div>




</div>

</div>

<div class="skeleton navbar_skeleton mt-5"></div>

</div>



  )
}

export default PageSkeleton