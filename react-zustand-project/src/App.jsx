import { useState } from 'react'
import './App.css'
import useMystore from './store'
import Navbar from './components/Navbar';

const App = () => {
 
 const state = useMystore();
 console.log(state)

  return (
   <div className='bg-gray-900 min-h-screen'> 
   <div className='text-white text-2xl'>
    <Navbar/>
   </div>
   </div>
  )
}

export default App
