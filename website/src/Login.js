import React from 'react'
import  './login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'




function Login() {
 let [userid,setuserid] =useState()
 let [pass,setpass]=useState()
 let navigate=useNavigate()



var logsub=(e)=>{
  e.preventDefault();
  if(userid===('Harsh8989') && pass===('Harsh@123')){
   navigate('/logedin')
  }else{
    alert("you entered a wrong credentials")
  }
  


}




  return (
    <>
    <div className={'logindiv'}>
        <img src="Images/loginimg.jpg" alt='..' width="100%" height="100%"/>
        </div>
        <div className={'loginid'}>
            <form >
            
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">User ID</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter your user id" onChange={(e)=>{setuserid(e.target.value)}}/>
</div>
<div class="mb-3">
    <label for="exampleInputEmail2" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="enter your password" onChange={(e)=>{setpass(e.target.value)}}/>
</div>
<button type="submit" class="btn btn-primary sublog" onClick={logsub}>Submit</button>

     
</form>
    </div>
    
    </>
  )
}

export default Login