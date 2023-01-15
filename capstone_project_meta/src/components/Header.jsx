import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="Little Lemon logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/">Order-Online</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Login</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header