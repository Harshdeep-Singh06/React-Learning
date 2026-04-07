import { useState } from 'react'

import './App.css'

function App() {
  const[count, setCount] = useState(0);
  

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
   </div>
  )
}

export default App
