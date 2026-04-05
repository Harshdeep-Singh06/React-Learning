import React from 'react'
import useMystore from '../store'

const Navbar = () => {

    const state = useMystore();
    // console.log(state)

    const handleClick = (()=>{
        state.increment();
    })

    const handleNameClick = (()=>{
        state.capitalizeName();
    })

  return (
    <div>
        <p className='font-semibold font-serif text-xl'>{state.name}</p>
        <p className='font-semibold font-serif text-xl mt-4'>{state.count}</p>
        <button
        onClick={handleClick} 
        className='border-3 border-sky-400 rounded-xl px-4 py-2 mt-6 font-semibold active:translate-y-2 active:text-sky-800   active:border-sky-800 transition '>
            Increment
        </button>
        <br />
        <button
        onClick={handleNameClick} 
        className='border-3 border-sky-400 rounded-xl px-4 py-2 mt-6 font-semibold active:translate-y-2 active:text-sky-800   active:border-sky-800 transition '>
            Capitalize
        </button>
    </div>
  )
}

export default Navbar