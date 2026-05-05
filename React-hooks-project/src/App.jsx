import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center'>
    <button className='text-purple-950 border-3 border-purple-950 px-4 py-2 rounded-xl bg-black font-semibold active:translate-y-2 active:border-purple-900 active:text-purple-900 duration-175  transition'>
      Click me
    </button>
   </div>
  )
}

export default App
