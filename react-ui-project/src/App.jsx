import { useState } from 'react'
import './App.css'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

function App() {
 
  const users = [
    {
      img:'https://imgs.search.brave.com/P_jagumKs4ovL0XtVVZN5dMALnRyJ-mgxH4VESPbYSs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU5L2Mw/L2MwLzU5YzBjMDgx/ZDg4MmRmMmFhZWIz/NTA4ODA0N2VjNWE3/LmpwZw',
      intro:'', 
      tag:'Unbothered'
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
