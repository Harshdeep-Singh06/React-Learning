import { createContext, useState } from 'react'
import './App.css'

//Create context
const UserContext = createContext();


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    Hello jee
   </div>
  )
}

export default App
