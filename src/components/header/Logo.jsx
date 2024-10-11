import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ toggleMenu }) => {
  return (
    <h1 className="header_logo">
      <Link to='/'>
        <em aria-hidden='true' onClick={toggleMenu}></em>
        <span>K-Music<br />Tube Stage</span>
      </Link>
    </h1>
  )
}

export default Logo
