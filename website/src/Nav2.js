import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './nav2.css'

function Nav2() {
 let navigate =useNavigate()
    let {pathname}=useLocation()
   if(pathname!=="/logedin" && pathname!=="/logedin/course" && pathname!=="/logedin/certificate" && pathname!=="/logedin/contact"  && pathname!=="/logedin/connect" )return null;



   var logoutsub=()=>{
    var con=window.confirm("are you sure")
    if(con===true){
      navigate('/login')

    }
   }
  return (
    <>



<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src="Images\ducat logo.png" alt='...' className={'imgnav'}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ulnav">
        <li class="nav-item linav">
          <Link class="nav-link active" aria-current="page" to="/logedin">Home</Link>
        </li>
        <li class="nav-item linav">
          <Link class="nav-link" to="/logedin/course">courses</Link>
        </li>
        <li class="nav-item linav">
          <Link class="nav-link" to="/logedin/certificate">certificate</Link>
        </li>
        <li class="nav-item linav">
          <Link class="nav-link" to="/logedin/contact">contact</Link>
        </li>
        <li class="nav-item linav">
          <Link class="nav-link" to="/logedin/connect">connect</Link>
        </li>
        <li class="nav-item linav">
        <button type="button" class="btn btn-dark" onClick={logoutsub}>logout</button>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
    
    
    
    </>
  )
}

export default Nav2