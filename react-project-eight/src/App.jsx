import { use, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  //first -> side-effect function
  //second -> clean-up function
  // Third comma seperated dep list

 //Variation : 1
 //Runs on every render
  // useEffect(() => {
  //    alert("I will run on each render")

  // })

  // Variation: 2
  // that runs on only first render
  useEffect(()=>{
    alert(" I will run on only first render")
  },[])


  function handleClick(){
    setCount(count+1);
  }

  return (
   <div>
     <button onClick={handleClick}>
      Click me
    </button>
    <br />
    Count is : {count}
   </div>
    
  )
}

export default App
