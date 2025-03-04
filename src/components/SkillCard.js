import React from 'react'

const SkillCard = ({imgUrl,title}) => {
  return (
    <div className='skill-card'>
        <img src={imgUrl} width="100px"/>
        <p style={{fontWeight:'600'}} >{title}</p>
    </div>
  )
}

export default SkillCard