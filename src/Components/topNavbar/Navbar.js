import React from 'react'
import "./Navbar.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [click, setclick] = useState();
  const handleClick = ()=> setclick(!click);
  const closeMobileMenu = ()=> setclick(false)  

    return (
     
    <nav className="Navbar">
      <h1 className="logo">Logoname</h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'></li>
        <form className="search">
                <input className="search-box" type="text" placeholder="Search here"></input>
          </form>
        <li className='nav-item'>
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to="/notifications" className="nav-links" onClick={closeMobileMenu}>Notifications</Link>
        </li>
        <li className='nav-item'>
          <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>Profile</Link>
        </li>
        <li className='nav-item'>
          <Link to="/create" className="nav-link" onClick={closeMobileMenu}>
            <button className='Createbtn'>Create</button>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/settings" className="nav-links" onClick={closeMobileMenu}>Settings</Link>
        </li>
      </ul>
    </nav>
   
    )
}

export default Navbar
