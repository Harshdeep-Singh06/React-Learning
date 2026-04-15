import React from 'react'

const RightCard = () => {
  return (
    <div className='h-full w-80 overflow-hidden relative rounded-4xl'>
        <img 
        className='h-full w-full object-cover'
        src ="https://images.unsplash.com/photo-1663524789647-090d8cbd834b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt= ""/>
        <div className='absolute top-0 left-0 p-8 flex flex-col justify-between h-full w-full bg-amber-200'>
            <h2 className='bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-semibold '>1</h2>
            <div>
                <p className='text-lg leading-normal '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores minus facilis quia asperiores cum excepturi?</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-700 text-white font-medium px-8 py-2 rounded-full'>Satisfied</button>
                    <button  className='bg-blue-700 text-white font-medium px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard