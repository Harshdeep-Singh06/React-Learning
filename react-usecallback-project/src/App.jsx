import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1);
  }

  return (
   <div className='flex flex-col justify-center items-center min-h-screen bg-black'>
   <button
   onClick={handleClick} 
   className='px-4 py-2 rounded-xl border-2 border-purple-400 text-purple-400 font-semibold active:translate-y-2 transition duration-300'>
    Increment
   </button>
   <div>
    <p className='px-4 py-2 border border-purple-400 rounded-2xl text-purple-400  mt-4'>
      Count: {count}
    </p>
   </div>
   </div>
  )
}

export default App
