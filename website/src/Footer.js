import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { CiLinkedin } from "react-icons/ci";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function Footer() {
 let [email,setemail] =useState()
 let {pathname} =useLocation()
 if(pathname==="/login" || pathname==="/logedin" ||pathname==="/logedin/course" || pathname==="/logedin/certificate" || pathname==="/logedin/contact" || pathname==="/logedin/connect")return null;


 var footsub=(e)=>{
e.preventDefault()
axios.post("http://localhost:3000/connect",{
  email
}).then((res)=>{
window.location.reload();
})
 }

  return (
    <div className={'div'}>
        <div className={'div2'}><p><b>Follow Us!</b><br/><FaFacebookF />&nbsp;&nbsp;<FaInstagram />&nbsp;&nbsp;<TiSocialYoutubeCircular />&nbsp;&nbsp;<CiLinkedin /></p></div>
        <div className={'div3'}>Quick Link <br/><ul className={'ul4'}><li><Link to="/java" className='nav-link'>Java</Link></li><li><Link to="/python"  className='nav-link'>Python</Link></li><li><Link to="/.net"  className='nav-link'>.Net</Link></li></ul></div>
        <div className={'div4'}>Top Courses <br/><ul className={'ul4'}><li>Java</li><li>Python</li><li>.Net</li></ul></div>
        <div className={'div5'}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Policies <br/><ul className={'ul4'}><li>Privacy Policy</li><li>Refund Policy</li></ul></div>
        <div className={'div6'}>Connect <br/><p className={'p'}>Join our mailing list and get exclusive discounts, early<br/> product launch access and more.</p><form><br/><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter email' onChange={(e)=>{setemail(e.target.value)}}/><br/><button type="submit" class="btn btn-primary" onClick={footsub}>Submit</button></form></div>
        <div className={'div7'}>© Copyright 2024, All Rights Reserved. Made by DUCAT INDIA</div>
    </div>
  )
}

export default Footer