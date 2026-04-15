import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = () => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative rounded-4xl'>
        <img 
        className='h-full w-full flex flex-nowrap gap-10 object-cover'
        src ="https://images.unsplash.com/photo-1663524789647-090d8cbd834b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt= ""/>
        <RightCardContent/>
        <RightCardContent/>
        <RightCardContent/>
        <RightCardContent/>
    </div>
  )
}

export default RightCard