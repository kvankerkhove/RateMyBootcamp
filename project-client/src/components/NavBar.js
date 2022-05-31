import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className="nav-bar">
      <button>logout</button>
      <Link to="/about">
        About
      </Link>
      <Link to="/bootcamps">
        Home
      </Link>
      <Link to="/login">
        Login
      </Link>
    </div>
  )
}

export default NavBar