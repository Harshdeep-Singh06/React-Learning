import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/Dashboard');
  }
  return (
    <div>
        About page
        <button onClick={handleClick} className='border border-amber-300 rounded-2xl px-2 font-sm shadow-xl mt-4 py-1 ml-4'>
          Move to Dashboard Page
        </button>
    </div>
  )
}

export default About