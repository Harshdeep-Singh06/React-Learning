import { use, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  
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
  // useEffect(()=>{
  //   alert(" I will run on only first render")
  // },[])


  //Variation: 3
  // useEffect(()=>{
  //   alert("I will run every time when count is updated")
  // },[count])

  //Variation: 4
  // useEffect(()=>{
  //   alert("I will run every time when count/total  is updated")
  // },[count, total])

  //Variation: 5
  useEffect(()=>{
    alert("Count is Updated")

    return()=>{
      alert("count is unmounted from UI");
    }

  },[count])

  function handleClick(){
    setCount(count+1);
  }

  function handleClickTotal(){
     setTotal(total+1);
  }

  return (
   <div>
     <button onClick={handleClick}>
      Update count
    </button>
    <br />
    Count is : {count}
    <br/>
     <button onClick={handleClickTotal}>
      Update Total
    </button>
    <br />
    Total is : {total}
   </div>
    
  )
}

export default App
