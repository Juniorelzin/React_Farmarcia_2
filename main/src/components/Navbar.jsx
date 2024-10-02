import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (

<div className="header-container">
    <img className="header-logo" src="./public/images/farmarcia-logo.png" alt="" />
    <Link className="header-a" to="/">Home</Link>
    <Link className="header-a" to="/senha">Senha</Link>
</div>


  )
}


export default Navbar
