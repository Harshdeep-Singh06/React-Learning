import React from 'react'
import useMystore from '../store'

const Navbar = () => {

    const state = useMystore();

  return (
    <div>
        <p>{state.name}</p>
        <p>{state.count}</p>
    </div>
  )
}

export default Navbar