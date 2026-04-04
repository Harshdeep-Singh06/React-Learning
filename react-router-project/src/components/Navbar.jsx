import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-green-900 text-white px-6 py-4'>
        <ul className='flex items-center justify-between'>
            <li>
                <Link to = '/'>Home</Link>
            </li>
            <li>
                <Link to = '/about'>About</Link>
            </li>
            <li>
                <Link to = '/dashboard'>Dashboard</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar