import React from 'react'
import "./sidebar.css"
import { FaArrowCircleRight, FaBars, FaHome } from 'react-icons/fa'
import { FiSettings } from "react-icons/fi"
import { Link, NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { useState, useContext } from 'react';
import { UserContext } from '../App';

const routes = [
  {
    path: "/expense",
    name: "Dashboard",
    icon: <FaHome />
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <CgProfile />
  },
  {
    path: "/chart",
    name: "Chart",
    icon: <FaHome />
  },
  {
    path: "/setting",
    name: "Setting",
    icon: <FiSettings />
  },

];
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch } = useContext(UserContext);
  const logout = () => {
    dispatch({ type: 'user_login', payload: { login: false, user: null } })
    // window.localStorage.removeItem("loginInfo")
    window.localStorage.clear()
  }
  const toogle = () => setIsOpen(!isOpen)
  return (
    <div className='main_container'>
      <div style={{ width: isOpen ? "300px" : "50px" }} className='sidebar'>
        <div className=' top_section'>
          <h1 style={{ display: isOpen ? "block" : "none" }} className='logo'>Expense Tracker</h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className='bars'>
            <FaBars onClick={toogle} />
          </div>
        </div>


        <div className='route_link'>
          {
            routes.map((route, index) => (

              <NavLink
                to={route.path}
                key={index}
                className="sidebar_link"
                activeclassname="active">

                <div className='icon'>{route.icon}</div>
                {isOpen && <div className='link_text'>{route.name}</div>}
              </NavLink>

            ))
          }
        </div>
        <div className='logout_section'>
          <div className='logout_icon'>
            <FaArrowCircleRight />
          </div>
          {isOpen && <div
            className='logout'
            onClick={logout}
          >
            <Link to="/" className='lg_text'> Logout</Link>
          </div>}
        </div>
      </div>
      <main>{children}</main>
    </div>

  )
}

export default Sidebar
