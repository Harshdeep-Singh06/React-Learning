import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h1 className='bg-blue-500'>{props.name}</h1>
    </div>
  )
}

export default Card