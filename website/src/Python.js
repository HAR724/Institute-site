import React from 'react'
import './java.css'
import { useState } from 'react'
import axios from 'axios'


function Python() {
  let[name,setname]=useState()
  let[email,setemail]=useState()
  let[course,setcourse]=useState()
  let[branch,setbranch]=useState()
  
  var pythsub=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/courses",{name,email,course,branch}).then((res)=>{
      window.location.reload();
  
    })
  
  }








  return (
    <>
    <div className={'javabac'}>
        <div className={'javaimg'}><img src="Images/python.png" alt='..' height="80px" width="80px"/></div>
        <div className={'javafont'}>Python</div>
        <div className={'star'}><img src="Images/star.png" alt='..' height="20px" width="20px"/><img src="Images/star.png" alt='..' height="20px" width="20px"/><img src="Images/star.png" alt='..' height="20px" width="20px"/><img src="Images/star.png" alt='..' height="20px" width="20px"/><img src="Images/star.png" alt='..' height="20px" width="20px"/></div>
        <div className={'javatxt'}>Enhance your expertise at Ducat India! Discover high-quality training sessions for a career <br/> prepared for the future. Open the door to innovative programs to enhance your abilities and <br/> drive your professional journey with 𝐏𝐲𝐭𝐡𝐨𝐧 𝐂𝐨𝐮𝐫𝐬𝐞𝐬.</div>
        <div className={'formjava'}><div className={'enquire'}>Enquire Now</div><div><form><input type="text" class="form-control inputfrm" placeholder="First name" aria-label="First name" onChange={(e)=>{setname(e.target.value)}}/><input type="email" class="form-control inputfrm" placeholder="Email" aria-label="First name" onChange={(e)=>{setemail(e.target.value)}}/> <select id="inputState" class="form-select inputfrm" onChange={(e)=>{setcourse(e.target.value)}}><option disabled selected>Select Course</option><option value="java">Java</option> <option value="python">python</option> <option value=".net">.Net</option> </select>   <select id="inputState" class="form-select inputfrm" onChange={(e)=>{setbranch(e.target.value)}}>
      <option disabled selected>Select Branch</option>
      <option value="Noida sector-63">Noida sector-63</option>
      <option value="Noida sector-16">Noida sector-16</option>
      <option value="South Delhi">South Delhi</option>
    </select> <button type="submit" class="btn btn-primary inputfrm" onClick={pythsub}>Submit</button>
  </form></div></div>
    </div>
    
    
    
    </>
   
  )
}

export default Python