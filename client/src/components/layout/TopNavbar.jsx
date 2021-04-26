import React from 'react'
import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'

function Navbar({ src }) {
  return (
    <>
      <nav className='navigation'>
        <div className='navigation-container'>
          <div className='navbar__logo'>
            <font>
              <span></span>
            </font>
            <div className='logo-displ'>
              <FaPaw />
            </div>
          </div>
          <ul className='item-links'>
            <li className='item'>
              <Link to='/'>
                <font>Home</font>
              </Link>
            </li>
            <li className='item'>
              <Link to='/schedule'>
                <font>Schedule</font>
              </Link>
            </li>
            <li className='item'>
              <Link to='/blog'>
                <font>Blog</font>
              </Link>
            </li>

            <li className='item'>
              <Link to='/ticket'>
                <font>Tickets</font>
              </Link>
            </li>
            <li className='item'>
              <Link to='/contact'>
                <font>Contact</font>
              </Link>
            </li>
            <li className='item'>
              <Link to='/about'>
                <font>About</font>
              </Link>
            </li>
          </ul>
          <div className='hamburger-menu'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
