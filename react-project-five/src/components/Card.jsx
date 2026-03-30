import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col items-center gap-3'>
       <input className='border border-black rounded-xl p-2'
       type ='text'
       value={props.name} 
       onChange={(e)=>props.setName(e.target.value)}
       />
       <p>Card compnent: {props.name} : {props.title} </p>
    </div>
  )
}

export default Card