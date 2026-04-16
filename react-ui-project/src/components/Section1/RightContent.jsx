import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'


const RightContent = (props) => {
  return (
     <div id='right' className='h-full flex rounded-4xl flex-nowrap gap-10  w-2/3 p-6 overflow-x-auto'>
      {props.users.map(function(elem,idx){
       
        return <RightCard  key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent