import React from 'react'
import './Navbar.css'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { FiMenu } from "react-icons/fi";

function Navber() {
    return (
        <div className='Navber header  '>
            <nav className="navbar navbar-expand-lg p-0 position-absolute  top-0 w-100">
                <div className="container-fluid container_main bg-white ">
                    <Link  to="/"  className="navbar-brand"  ><img src={Logo} alt='logo' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><FiMenu /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Service" className="nav-link" >Service</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/" className="nav-link" >Pages</Link>
                            </li> */}
                            {/* <li className="nav-item dropdown">
                                <Link  to="/"  className="nav-link dropdown-toggle"   id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Blogs
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link  to="/"  className="dropdown-item"  >Action</Link></li>
                                    <li><Link  to="/"  className="dropdown-item"  >Another action</Link></li>

                                    <li><Link  to="/"  className="dropdown-item"  >Something else here</Link></li>
                                </ul>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link">Contact us</Link>
                            </li>
                          

                        </ul>

                    </div>
                    <div className='buttons_banner'>
                            <button className='button bg-dark'> <Link to="/Contact" className='text-white text-decoration-none' >Contact us </Link></button>
                        </div>
                </div>
            </nav>
            <Outlet />
        </div>
  
    )
}

export default Navber
