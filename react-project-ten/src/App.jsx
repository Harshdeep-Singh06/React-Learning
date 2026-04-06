import { useState,useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);

  let btnRef = useRef();

  function handleIncrement(){
    val.current = val.current + 1;
    console.log("Value of val:",val.current);
    setCount(count+1);
  }

  function changeColor(){
    btnRef.current.style.backgroundColor = "red"
  }

  //It runs on every render
  useEffect(()=>{
    console.log("Render Again");
  })

  return (
   <div className='flex flex-col items-center justify-center bg-black min-h-screen'>
    <button
    ref = {btnRef}
    onClick={handleIncrement}
     className='bg-sky-500 px-4 py-2 rounded-xl border-4 border-gray-800 active:translate-y-2 transition'>
      Increment
    </button>

    <button
    onClick={changeColor}
     className='bg-sky-500 px-4 py-2 mt-4 rounded-xl border-4 border-gray-800 active:translate-y-2 transition '>
      Change color
    </button>

    <div className='bg-sky-500 rounded-xl px-4 py-2 mt-4'>
      Count: {count}
    </div>
   </div>
  )
}

export default App
