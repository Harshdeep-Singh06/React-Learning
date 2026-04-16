import { useState } from 'react'
import './App.css'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

function App() {
 
  const users = [
    {
      img:'https://i.pinimg.com/736x/47/1c/d3/471cd32de3b7e48fff6e8111a10a8fa3.jpg',
      intro:'',
      color:'brown',  
      tag:'Immortal'
    },{
      img:'https://i.pinimg.com/736x/fd/0f/2b/fd0f2b63bbd6599f1e3cece2a9f67dc4.jpg',
      intro:'',
      color:'olive', 
      tag:'Unreachable'
    },
    {
      img:'https://i.pinimg.com/736x/ae/7a/06/ae7a06eeb84d0bac60a097612c437eb5.jpg',
      intro:'', 
      color:'navy', 
      tag:'Unbothered'
    },
    {
      img:'https://i.pinimg.com/736x/d4/2c/14/d42c140ac5d286d9c7d83a4d77739aaa.jpg',
      intro:'', 
      color:'orange', 
      tag:'Baller'
    },
    {
      img:'https://images.unsplash.com/photo-1663524789647-090d8cbd834b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'', 
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'', 
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661777467209-d1fb895cd266?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'', 
      tag:'Underbanked'
    },
   
   
  ]
  return (
    <>
      <Section1 users={users}/>
      <Section2/>
    </>
  )
}

export default App
