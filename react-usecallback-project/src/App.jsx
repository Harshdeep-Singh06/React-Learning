import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='flex flex-col justify-center items-center min-h-screen bg-black'>
    <h1 className='text-purple-400'>
      hello  jee
    </h1>
   </div>
  )
}

export default App
