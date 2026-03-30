import { useState } from 'react'
import './App.css'

function App() {

  function handleClick(){
    alert("I am Clicked");
  }


  function handleMouseOver(){
    alert("Hey buddy");
  }

  function handleInput(e){
    console.log("Value till now", e.target.value);
    
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>

    <form>
      <input className = "border border-blue-800 rounded-xl outline-none " type="text" onChange={handleInput}/>
    </form>

      {/* <p className='font-bold font-serif text-pink-500' onMouseOver={handleMouseOver}>
        Hey buddy para here!
      </p>

      <button className='rounded-lg bg-blue-400' onClick={handleClick}>
        Click me
      </button> */}

    
    </div>
  )
}

export default App
