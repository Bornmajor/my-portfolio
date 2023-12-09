import React from 'react'
import skillsImg from '../assets/skills.png'


function About() {
  return (
   
<div className="d-flex justify-content-center">

<div class="d-flex flex-column">
<img class="d-flex align-self-center" src={skillsImg} id='main_img'/>
<h1 className="text-center">About me</h1>


<div className="category_container">

<div className="category_section">


<div className="category_content">
I'm Osborn Maja, a dedicated 4th-year student at Muranga University, 
passionately pursuing software engineering. With a robust <b>three</b>  years of 
hands-on experience, I've delved into the world of application development, crafting solutions 
that span the spectrum from <b>web and desktop to mobile platforms</b>. 
Currently residing in the vibrant city of Mombasa, my approach to design 
centers around <b> usability, consistently striving to bring substantial value to
both end-users and stakeholders alike </b>. Excited about the endless possibilities
technology offers, I am enthusiastic about contributing to the ever-evolving 
landscape of software engineering.    
</div>


<h2 class='category_header'>Design principles</h2>

<div class="category_content">
<h3 class="category_header">Usability</h3>
I believe that the heart of software development lies in understanding the intricate balance
 between technology and human interaction. This belief has led me to explore not 
 only the technical aspects but also the art of creating user-friendly, accessible,
 and visually appealing applications. With a background in UX design,
 I strive to ensure that my creations are intuitive, engaging, and universally accessible to all.
</div>

<div class="category_content">
<h3 class="category_header">Problem solving</h3>
As a software developer, my unwavering passion for problem solving is at the core of my approach.
I see every challenge as an opportunity to dissect complex issues, analyze them from multiple angles, 
and devise elegant solutions. With an innate curiosity and an insatiable appetite for learning, 
I thrive on untangling intricate technical puzzles, whether it's debugging a piece of code, 
optimizing performance bottlenecks, or architecting innovative software systems.
My problem-solving skills are honed not only by my technical acumen but also by my ability to listen, 
empathize, and deeply understand the needs of end-users and stakeholders.
This holistic perspective allows me to translate intricate technical challenges into user-friendly,
value-driven solutions that stand the test of time.


</div>


</div>

<div className="category_section">

<h2 className='category_header'>Skills</h2>

<div className="category_content">
<h4> <i class="fas fa-star"></i>  Mobile development(Android & iOS)</h4>
<div><i class="fas fa-check"></i> Java</div>
<div><i class="fas fa-check"></i> React native</div>
<div><i class="fas fa-check"></i> Javascript</div>

</div>

<div className="category_content">

<h4><i class="fas fa-star"></i>  Web development</h4>

<div className="spaced_container">
<h5> Frontend technologies</h5>  
<div><i class="fas fa-check"></i> HTML and CSS</div>
<div><i class="fas fa-check"></i> Javascript</div>
<div><i class="fas fa-check"></i> React</div>    
</div>


<h5> Backend technologies</h5>
<div className="spaced_container">
<div><i class="fas fa-check"></i> PHP</div>
<div><i class="fas fa-check"></i> Laravel</div>    
<div><i class="fas fa-check"></i> Node js</div>
</div>  
</div>





<div className="last_updated float-right">
<h5 >Last update : 9th December 2023</h5>    
</div>

</div>



</div>
</div>
</div>
  )
}

export default About