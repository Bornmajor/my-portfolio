import React from 'react'

const ExperienceCard = ({role,start_date,end_date,company,location,children,country}) => {
  return (
    <div className='experience-card'>
        
        <p className='role bold font-18 my-1'>{role} at {company}</p>

        <div className='d-flex gap-10 text-muted dates my-1'>
         <p>{start_date}</p>
         <span>-</span>
         {end_date ?
         <p>{end_date}</p>  
          : 
         <p>Present</p>  
         }
         
        </div>

        <p className='location font-14 text-success'>{location ? location :'Remote'} - {country}</p>

        

        <div className='my-3 descriptions'>
            {children}
        </div>

    </div>
  )
}

export default ExperienceCard