import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"
import { useLocation } from 'react-router-dom'

function Nav() {
  let {pathname}=useLocation()
  if(pathname==="/logedin" || pathname==="/logedin/course" || pathname==="/logedin/certificate" || pathname==="/logedin/contact" || pathname==="/logedin/connect")return null;
  


  return (
    <>
    <nav className="navbar navbar-expand-lg bodyName body">
  <div className="container-fluid">
    <img src='Images/ducat logo.png' alt='..' className={'ducat'}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul">
        <li className="nav-item li">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item li">
          <Link className="nav-link" to="/about us">About Us</Link>
        </li>
        <li className="nav-item dropdown li">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="java">Java</Link></li>
            <li><Link className="dropdown-item" to="python">Python</Link></li>
            <li><Link className="dropdown-item" to="net">.Net</Link></li>
          </ul>
        </li>
        <li className="nav-item li">
          <Link className="nav-link" to="/certificate">Certificate</Link>
        </li>
        <li className="nav-item li">
          <Link className="nav-link" to="/placement">Placement</Link>
        </li>
        
       <Link to="/contact" className={'li'}> <button type="button" class="btn btn-warning">Contact Us</button></Link>
       <Link to="/login"><button type="button" class="btn btn-info">Login</button></Link>
        
      </ul>
     
    </div>
  </div>
</nav>
    
    </>
  )

}




export default Nav