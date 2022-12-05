import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    
    <nav className="navbar bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Redux-Saga</a>
   


    <form className="d-flex" role="search">
    <Link to='/add'><button>Add User</button></Link>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>

    
    </form>
  </div>
</nav>
    
    </div>
  )
}

export default Navbar