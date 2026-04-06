import React from 'react'
import useMystore from '../store'
import { useEffect } from 'react'

const Navbar = () => {

   const count = useMystore(state => state.count)
   const increment = useMystore(state  => state.increment)
   const capitalizeName = useMystore(state => state.capitalizeName)

   useEffect(()=>{
    console.log("re render" ,count);
   },[count])

  return (
    <div>
        <p className='font-semibold font-serif text-xl'>{count}</p>
        {/* <p className='font-semibold font-serif text-xl mt-4'>{state.count}</p> */}
        <button
        onClick={increment} 
        className='border-3 border-sky-400 rounded-xl px-4 py-2 mt-6 font-semibold active:translate-y-2 active:text-sky-800   active:border-sky-800 transition '>
            Increment
        </button>
        <br />
        <button
        onClick={capitalizeName} 
        className='border-3 border-sky-400 rounded-xl px-4 py-2 mt-6 font-semibold active:translate-y-2 active:text-sky-800   active:border-sky-800 transition '>
            Capitalize
        </button>
    </div>
  )
}

export default Navbar