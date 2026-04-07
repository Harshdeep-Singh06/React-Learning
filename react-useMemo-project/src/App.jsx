import { useMemo, useState } from 'react'

import './App.css'

function App() {
  const[count, setCount] = useState(0);
  const[input, setInput] = useState(0);

    function expensiveTask(num){
      console.log("Inside expensive taks");
      for(let i = 0; i<=100000000; i++){

      }
        return num*2;
    }

    let doubleValue =  useMemo(()=>expensiveTask(input),[input]) ;

 

  return (
   <div className='flex flex-col justify-center items-center min-h-screen bg-black'>
    <button 
    onClick={()=>setCount(count+1)}
    className='border-2 px-4 py-2 font-semibold rounded-xl bg-green-400 border-yellow-300 active:translate-y-2 transition'>
      Increment 
    </button>

    <div className='border-2 border-green-300 px-4 py-2 rounded-xl mt-4'>

      <p className='text-green-400'>
        Count: {count}
      </p>

    </div>

    <div>
      <input 
      type='number'
      placeholder='enter number'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      className='border-2 border-purple-400 rounded-xl px-4 text-purple-400 mt-4 outline-none'>
      </input>
    </div>

    <div className='border-2 border-green-300 px-2 py-2 rounded-xl mt-4 '>

       <p className='text-yellow-400'>
        Double: {doubleValue}
      </p>

    </div>
   </div>
  )
}

export default App
