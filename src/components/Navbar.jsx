import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <header className='header'>
        
        <NavLink to="/" className={"w-18 h-18 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"} > 
        <p className='blue-gradient_text'>SR</p>

        </NavLink>
        <nav className='flex text-lg font-medium gap-7'>
            <NavLink to="/about" className={({isActive}) => isActive? "text-blue-500": "text-black" }>
                About
            </NavLink>
            {/* TODO: correct the route to navigate to project page */}
            <NavLink to="/" className={({isActive}) => isActive? "text-blue-500": "text-black" }>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar