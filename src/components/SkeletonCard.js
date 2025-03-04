import React from 'react'

const SkeletonCard = ({ numCards }) => {
    const cards = new Array(numCards).fill(null).map((_,index) =>(
        <div className="skeleton-card"></div>
    ))
  return (
    <div className='blogCardContainer'>{cards}</div>
  )
}

export default SkeletonCard