import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { UserContext } from '../../App'
import { FaBars, FaTimes, FaCog } from "react-icons/fa";


const Header = () => {
    const { user, dispatch } = useContext(UserContext);
    const [click, setClick] = useState(false)
    if (user.login) {

        return (

            <nav className='navbar'>
                <span className='nav-logo'>Expense Tracker</span>
                <div className='nav-icon' >
                    <i onClick={() => setClick(!click)} className='faIcon'>{click ? <FaTimes /> : <FaBars />}</i>

                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item' onClick={() => setClick(false)}>
                        <Link className='link' to='/expense'>Home</Link>
                    </li>
                    <li className='nav-item' onClick={() => setClick(false)}>
                        <Link className='link' to='/profile'>profile</Link>
                    </li>
                    <li
                        className='nav-item'
                        // onClick={() => setClick(false)}

                        onClick={()=> dispatch({ type: 'user_login', payload: {login:false} })}
                    >
                        {/* <i><FaCog/></i> */}
                        <Link className='link' to='/' >Logout</Link>
                    </li>

                </ul>

            </nav>



        )
    } else {
        return (
            <div className='header'>
                <span className='header_logo'>EXPENSE TRACKER</span>
                <div className='header_nav'>

                    <div className='nav_option'>
                        <span className='option'>
                            <Link className='link' to='/'>Home</Link>
                        </span>
                    </div>
                    <div className='nav_option'>
                        <span className='option'>
                            <Link className='link' to='/Register' >Register</Link>
                        </span>
                    </div>

                    <div className='nav_option'>
                        <span className='option'>
                            About us
                        </span>
                    </div>

                    <div className='nav_option'>
                        <span className='option'>
                            Contact us
                        </span>
                    </div>

                    <div className='nav_option'>
                        <span className='option'>
                            Email us
                        </span>
                    </div>
                </div>

            </div>
        )
    }

}

export default Header 
