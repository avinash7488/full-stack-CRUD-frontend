import React from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div id='navbar'>
        <Link to={"/"}><button className='btn'>Home</button></Link>
        <Link to={"/register"}><button className='btn'>Register</button></Link>
        <Link to={"/login"}><button className='btn'>Login</button></Link>
        <Link to={"/get_notes"}><button className='btn'>Get-Notes</button></Link>
        <Link to={"/add_notes"}><button className='btn'>Add-Notes</button></Link>
    </div>
  )
}

export default Navbar