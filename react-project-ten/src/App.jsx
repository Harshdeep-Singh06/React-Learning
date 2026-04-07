import { useState,useEffect, useRef } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  // let val = useRef(0);

  // let btnRef = useRef();

  // function handleIncrement(){
  //   val.current = val.current + 1;
  //   console.log("Value of val:",val.current);
  //   setCount(count+1);
  // }

  // function changeColor(){
  //   btnRef.current.style.backgroundColor = "red"
  // }

  // //It runs on every render
  // useEffect(()=>{
  //   console.log("Render Again");
  // })

  const [time, setTime] = useState(0); 

  let timeRef = useRef(null);

  function startTimer(){
    timeRef.current = setInterval(()=>{
      setTime(time => time + 1)
    },1000);
  }
  function stopTimer(){
    clearInterval(timeRef.current);
    timeRef.current = null;
  }
  function resetTimer(){
    stopTimer();
    setTime(0);
  }

  return (
   <div className='flex flex-col items-center justify-center bg-black min-h-screen'>
    {/* <button
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
    </div> */}

      <h1 className='text-red-500 border-2 rounded-4xl px-4 py-5 font-bold shadow-2xl'>  
        StopWatch: {time} seconds
      </h1>

      <button
      onClick={startTimer}
       className='bg-red-800 px-3 py-3 mt-6 rounded-2xl active:translate-y-2 transition'>
        start
      </button>

      <button 
      onClick={stopTimer}
      className='bg-red-800 px-3 py-3 mt-6 rounded-2xl active:translate-y-2 transition'>
        stop
      </button>

      <button
      onClick={resetTimer}
       className='bg-red-800 px-3 py-3 mt-6 rounded-2xl active:translate-y-2 transition'>
        reset
      </button>

   </div>
  )
}

export default App
