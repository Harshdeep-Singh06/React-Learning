import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  function handleClick(){
      navigate('/about');
  }
  return (
    <div>
        Home Page
        <button onClick={handleClick} className='border border-amber-300 rounded-2xl px-2 font-sm shadow-xl mt-4 py-1 ml-4'>
          Move to About Page
        </button>
    </div>
  )
}

export default Home