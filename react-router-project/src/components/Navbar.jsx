import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white px-6 py-4'>
        <ul className='flex items-center justify-between'>
            <li>
                <NavLink to = '/' className={({isActive})=>isActive ? "text-yellow-400" : ""}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to = '/about' className={({isActive})=>isActive ? "text-yellow-400" : ""}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to = '/dashboard' className={({isActive})=>isActive ? "text-yellow-400" : ""}>
                    Dashboard
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar