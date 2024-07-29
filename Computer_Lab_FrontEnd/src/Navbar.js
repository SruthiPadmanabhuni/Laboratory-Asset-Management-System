import React from 'react'
import {Link} from 'react-router-dom'
import clglogo from './clglogo.png'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="navbar-brand">
              <img src={clglogo} alt='' className='mlogo'/>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <Link to="/">
                    <li className="nav-item">
                      <p className="nav-link active">
                          Home
                      </p>
                    </li>
                </Link>
                <Link to="/StudentLogin">
                    <li className="nav-item mr-1">
                      <button className='btn btn-primary'>Student Login</button>
                    </li>
                </Link>
                <Link to="/AdminLogin">
                    <li className="nav-item">
                      <button className='btn btn-primary'>Admin Login</button>
                    </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default Navbar;
