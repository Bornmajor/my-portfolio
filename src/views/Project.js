import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MyContext from '../context/context';
import Description from '../components/Description';
function Project() {

const params = useParams();
const {projectData} = useContext(MyContext);
const [project,setProject] = useState(null)

useEffect(() => {

const currentProject  = projectData.find((project) => project.id == params.projectId);
setProject(currentProject);

console.log('Current project:')
console.log(currentProject);

}, [projectData,params.projectId]);

return (
<>
{
project !== null &&
(
<div className='container-project-page'>

  <p className="main-header extra-bold my-2">{project.projectTitle}</p>
  
  <div className='inner-container'>

    <div className='img-container'>
      <img src={project.coverImg} className="project-page-img" />
    </div>

  

<div className="project-content">

<p className="sub-header bold">Overview</p>

<p className="my-2 description">
  <Description text={project.description} maxLength={250} >{project.description}</Description>
  
  </p>



{project.technologies !== 0 &&
<div className="my-3">
<p className="sub-header bold my-2">Tech stack</p>

<div className='d-flex flew-wrap gap-10'>
{
project.technologies !== undefined &&
project.technologies.map((item) => <p key={item} className="app-link tech-stack-item">{item}</p>)

}

  </div>


</div>
}

<div className='my-3'>

<p className="sub-header">Resources</p>

<div className='my-2'>
{project.github_url && 
<a className='btn btn-success' href={project.github_url}>Github</a>
}

{project.live_url && 
<a className='btn btn-success mx-2' href={project.live_url}>Live demo</a>
}

</div>



</div>



</div>


  </div>




{/* Project{params.projectId} */}

</div>
)

}


</>

)
}

export default Project