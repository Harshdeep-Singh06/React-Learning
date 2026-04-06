import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  return (
   <div className='flex flex-col items-center justify-center bg-black min-h-screen'>
    <button className='bg-sky-500 px-4 py-2 rounded-xl border-4 border-gray-800 active:translate-y-2 transition'>
      Increment
    </button>
   </div>
  )
}

export default App
