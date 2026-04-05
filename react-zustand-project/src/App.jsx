import { useState } from 'react'
import './App.css'
import useMystore from './store'
import Navbar from './components/Navbar';

const App = () => {
 
 const state = useMystore();

  return (
   <div className='flex flex-col items-center justify-center bg-gray-900 min-h-screen text-white'> 
    <Navbar/>
   </div>
  )
}

export default App
