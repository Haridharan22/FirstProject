import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from "react-router-dom";
import './Navbar.css'



function Navbar() {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-light bg-dark" id="navbar">
    <div class="container-fluid">
      <Link class="navbar-brand"  >SPICES</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/Home" class="nav-link" >Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/About" class="nav-link">About</Link>
          </li>
          <li class="nav-item">
            <Link to="/Product" class="nav-link" >Products</Link>
          </li>
          <li class="nav-item">
            <Link to="/Contact" class="nav-link">Contact</Link>
          </li>
         </ul>
         <Link to="/Login"class="btn p-2 my-lg-0 my-2" >Log Out</Link>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar