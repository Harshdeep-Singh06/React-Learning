import { useState } from 'react'
import './App.css'

function App() {

  function handleClick(){
    alert("I am Clicked");
  }


  function handleMouseOver(){
    alert("Hey buddy");
  }


  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <p className='font-bold font-serif text-pink-500' onMouseOver={handleMouseOver}>
        Hey buddy para here!
      </p>
      <button className='rounded-lg bg-blue-400' onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default App
