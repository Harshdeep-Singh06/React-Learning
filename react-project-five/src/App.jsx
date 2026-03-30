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
    <div>
      <Card name = {name} setName = {setName}/>
    </div>
  )
}

export default App
