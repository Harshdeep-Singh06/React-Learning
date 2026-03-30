import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // Create State
  // Manage state
  // Change state
  // Sync child in all state
  const [name, setName] = useState('');
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-1'>
      <Card name = {name} setName = {setName}/>
      <p> Parent Component:  {name} </p>
    </div>
  )
}

export default App
