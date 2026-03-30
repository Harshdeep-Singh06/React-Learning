import { useState } from 'react'
import './App.css'

function App() {
  function handleClick(){
    alert("I am Clicked");
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <button className='rounded-lg bg-blue-400' onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default App
