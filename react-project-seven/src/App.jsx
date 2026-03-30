import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <button className='rounded-lg bg-blue-400'>
        Click me
      </button>
    </div>
  )
}

export default App
