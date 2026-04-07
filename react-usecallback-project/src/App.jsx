import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1);
  }

  const handleClick = useCallback(()=>{
    setCount(count + 1);
  });

  return (
   <div className='flex flex-col justify-center items-center min-h-screen bg-black'>

    <div>
    <p className='px-4 py-2 border border-purple-400 rounded-2xl text-purple-400  mb-7'>
      Count: {count}
    </p>
   </div>

   <button
   onClick={handleClick} 
   className='px-4 py-2 rounded-xl border-2 border-purple-400 text-purple-400 font-semibold active:translate-y-2 transition duration-300 mb-6'>
    Increment
   </button>
  
   <div>
    <ChildComponent
     buttonName="Click Me"
     handleClick={handleClick}
     />
   </div>
   </div>
  )
}

export default App
