import React, { useState } from 'react'
import './navbar.css'
import { FaBars,FaTimes, FaCog } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [click, setClick] = useState(false)


  return (
   <nav className='navbar'>
    <span className='nav-logo'>Expense Tracker</span>
    <div className='nav-icon' >
        <i onClick={()=> setClick(!click)} className= 'faIcon'>{click ? <FaTimes/> : <FaBars/>}</i>

    </div>
    <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item' onClick={()=> setClick(false)}>
               <Link  to='/expense'>Home</Link>
        </li>
        <li className='nav-item' onClick={()=> setClick(false)}>
              <Link to = '/profile'>profile</Link>
        </li>
        <li 
        className='nav-item' 
        onClick={()=> setClick(false)}
        >
                {/* <i><FaCog/></i> */}
                Logout
        </li>

    </ul>
    
   </nav>
  )
}

export default Navbar
