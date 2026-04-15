import React from 'react'

const RightCardContent = () => {
  return (
     <div className='absolute top-0 left-0 p-8 flex flex-col justify-between h-full w-full '>
            <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold '>1</h2>
            <div>
                <p className='text-xl leading-relaxed text-white mb-14 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores minus facilis quia asperiores cum excepturi?</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-700 text-white font-medium px-8 py-2 rounded-full'>Satisfied</button>
                    <button  className='bg-blue-700 text-white font-medium px-4 py-2 rounded-full text-gra'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent