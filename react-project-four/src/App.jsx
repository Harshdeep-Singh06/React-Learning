import './App.css'
import Carddd from './components/Carddd'
import Button from './components/Button'
import {useState}from 'react'

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>
      <Button handleClick = {handleClick} text = "click me">
        <h1>{count}</h1>
      </Button>
    {/* <Carddd name="Harsh">
    <h1>Web dev journey</h1>
    <p>Trying to be consistent in this journey</p>
    <p>Will complete these things soon</p>
    </Carddd> */}

   </div>
  )
}

export default App
