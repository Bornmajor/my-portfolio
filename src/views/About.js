import React from 'react'
import skillsImg from '../assets/images/About me.gif'
import LargeScreenSkills from '../components/LargeScreenSkills'
import { Helmet } from 'react-helmet';
import WorkExperience from '../components/WorkExperience';

function About() {
  return (
   <>
     <Helmet>
    <title>Osborn Maja | About</title>
    <meta name="description" content="A developer,design and problem solver" />
    <meta name="robots" content="index, follow" />
    </Helmet>

   <div className="d-flex justify-content-center">

<div class="d-flex flex-column">
<img class="d-flex align-self-center" src={skillsImg}  id='main_img'/>
{/* <h3 className="main_header text-center">About me</h3> */}


<div className="category_container">

<div className="category_section">

<div>
<WorkExperience />  
</div>

<div className="introduction_content">




{/* <h3 class="category_header">Introduction</h3>  */}
<h2 className='category_header text-center'>Skills</h2>

<LargeScreenSkills />


<div className="last_updated float-right">
<h5 >Last update :<span style={{fontWeight:600}}>4rd March , 2025</span> </h5>    
</div>
</div>




<div className="design_principles_category">

<h2 class='category_header'>Core design principles</h2>  

<div className="usability_problem_section">

<div class="usability_content">
<h3 class="category_subheader">Usability</h3>
I believe that the heart of software development lies in understanding the intricate balance
 between technology and human interaction. This belief has led me to explore not 
 only the technical aspects but also the art of creating user-friendly, accessible,
 and visually appealing applications. With a background in UX design,
 I strive to ensure that my creations are intuitive, engaging, and universally accessible to all.
</div>

<div class="problem_solving_content">
<h3 class="category_subheader">Problem solving</h3>
As a software developer, I am driven by a passion for problem-solving,
 viewing challenges as opportunities to create elegant solutions.
  My curiosity and love for learning enable me to tackle complex technical puzzles,
   from debugging and optimizing performance to architecting innovative systems. 
   By understanding the needs of users and stakeholders, 
I transform technical issues into user-friendly, enduring solutions.
</div>

</div>




</div>

</div>

<div className="category_section">









</div>



</div>
</div>
</div>
   </>

  )
}

export default About