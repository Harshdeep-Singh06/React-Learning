import { useState } from 'react'
import './App.css'
import {createBrowserRouter} from "react-router-dom"
import Home from './components/Home'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
    {},
    {}
  ]
)

function App() {


  return (
    <div>
      Hello Jee
    </div>
  )
}

export default App
