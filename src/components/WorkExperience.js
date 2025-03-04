import React from 'react'
import ExperienceCard from './ExperienceCard'

const WorkExperience = () => {
  return (

    <div className='work-experience my-3'>

        <div className='section'>
         
         <ExperienceCard role='Web developer'
          company={'Nafusite jewellery e-store'}
          start_date={'Jan 2025'}
          country={'Kenya'}

          >
            <ul className='achievements'>
              <li className='font-14'>Front-end development - Develop responsive and visually appealing designs using frontend technology react.js</li>
              <li className='font-14'>Performance Optimization - Ensure the website is fast and scalable through caching and utilizing CDNs, optimize images, CSS, and JavaScript for faster loading.</li>
              <li className='font-14'>Security - Protect the website from vulnerabilities and cyber threats.</li>
              <li className='font-14'>Maintenance and Updates - Add new features or improve existing ones based on user feedback.</li>
              <li className='font-14'>Database design - design and developed nosql </li>
              <li className='font-14'>Search Engine Optimization (SEO) - Optimize the website for search engines to improve visibility and traffic.</li>
              <li className='font-14'>Testing and Debugging - Ensure the website is bug-free and functions as expected.</li>
              <li className='font-14'> User Experience (UX) - Design intuitive navigation and user flows.</li>

            </ul>

         </ExperienceCard>

         <ExperienceCard role='Technology intern'
          company={'Roamtech soln'}
          start_date={'March 2025'}
          location={'Westlands'}
          country={'Kenya'}

          >
            <ul className='achievements'>
              {/* <li className='font-14'>Front-end development - Develop responsive and visually appealing designs using frontend technology react.js</li> */}
            </ul>

         </ExperienceCard>

        </div>
        
    </div>
  )
}

export default WorkExperience