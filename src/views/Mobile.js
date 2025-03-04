import React from 'react'
import mobileImg from '../assets/images/mobile.png'
import docImg from '../assets/images/documents.png'
import MyContext from '../context/context'
import { useContext } from 'react'
import { Helmet } from 'react-helmet';
import ProjectCard from '../components/ProjectCard'
import HorizontalScrollable from '../components/HorizontalScrollable'

function Mobile() {
const {projectData} = useContext(MyContext);

// Filter the projects to get only the mobile ones
const mobileProjects = projectData.filter(project => project.projectType === 'mobile').sort((a, b) => b.id - a.id); // Sort in descending order of id;

return (
<> 

<Helmet>
<title>Osborn Maja | Apps</title>
<meta name="description" content="Discover a showcase of creativity, technical expertise, and design excellence in standalone apps" />
<meta name="robots" content="index, follow" />
</Helmet>

<div className="">

<div className="d-flex flex-column">

<div className='d-flex flex-column my-4'>
<img className="d-flex align-self-center" src={mobileImg}  id="main_img" alt='Mobile image'/>
<h2 className="text-center">Mobile projects</h2>     
</div>

{/* <h2 className="text-center">(gitub)</h2> */}


<div className="project_container">

<div className='project-items-container large-screen-horizontal-scrollable'>
{mobileProjects.map(project => (
<>

<ProjectCard
id={project.id}
github_url={project.github_url}
title={project.projectTitle}
coverImg={project.coverImg}
type="Mobile project"
desc={project.description}
/>
</>

))}


</div>




<div className='mobile-horizontal-scrollable'>
<HorizontalScrollable>
{mobileProjects.map(project => (
<ProjectCard
id={project.id}
github_url={project.github_url}
title={project.projectTitle}
coverImg={project.coverImg}
type="Mobile project"
desc={project.description}
/>
))}
  
</HorizontalScrollable>




</div>

<div className='d-flex justify-content-center'>
<a className="btn btn-success my-3" href='https://github.com/stars/Bornmajor/lists/mobile-apps'>More projects</a>
</div>

</div>





</div>
</div>
</>

)
}

export default Mobile