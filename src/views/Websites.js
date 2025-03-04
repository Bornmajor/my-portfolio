import React, { useContext } from 'react'
import webImg from '../assets/images/website.png'
import docImg from '../assets/images/documents.png'
import MyContext from '../context/context'
import { Helmet } from 'react-helmet';
import ProjectCard from '../components/ProjectCard';
import HorizontalScrollable from '../components/HorizontalScrollable';

function Websites() {
  const {projectData} = useContext(MyContext);
    // Filter the projects to get only the website ones
    const webProjects = projectData.filter(project => project.projectType === 'website').sort((a, b) => b.id - a.id); // Sort in descending order of id;
  return (
    <>
     <Helmet>
    <title>Osborn Maja | Websites</title>
    <meta name="description" content="Discover a showcase of creativity, technical expertise, and design excellence in web apps.Tech stack React | Node js | PHP | Bootstrap " />
    <meta name="robots" content="index, follow" />
    </Helmet>
        <div className=""  style={{width:'100%'}}>

<div className="d-flex flex-column">

<div className='d-flex flex-column my-4'>
<img className="d-flex align-self-center" src={webImg} id="main_img" alt='Website image'/>
<h1 className="text-center">Web projects</h1>
</div>

<div className="project_container">

  <div className='project-items-container large-screen-horizontal-scrollable'>
    {webProjects.map(project => (
  
<>
<ProjectCard
 id={project.id}
 title={project.projectTitle}
 github_url={project.github_url}
 desc={project.description}
 coverImg={project.coverImg}
  type="Web project" />
</>


))}

  </div>

<div className='mobile-horizontal-scrollable'>
   <HorizontalScrollable >
  {webProjects.map(project => (
  
  <>
  <ProjectCard
   id={project.id}
   title={project.projectTitle}
   github_url={project.github_url}
   desc={project.description}
   coverImg={project.coverImg}
    type="Web project" />
  </>
  
  
  ))}
  </HorizontalScrollable> 

 
</div>


  <div className='d-flex justify-content-center'>
   <a className="btn btn-success my-3" href='https://github.com/stars/Bornmajor/lists/web-apps'>
   More projects
   </a>
 
  </div>



</div>


</div>
</div>
    </>

  )
}

export default Websites