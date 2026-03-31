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

  function handleSubmit(e){
    e.preventDefault();
    alert("Wanna submit")
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
    <button className='border-2 border-rose-500 rounded-xl px-4 text-blue-700'>
      Click me
    </button>



    {/* <form onSubmit={handleSubmit}>
      <input className = "px-4 py-1 border border-blue-800 rounded-l-xl outline-none " type="text" onChange={handleInput}/>
      <button className='bg-blue-500 rounded-r-xl py-2 px-2 text-sm' type="submit">
        Submit
      </button>
    </form> */}


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
