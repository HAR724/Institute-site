import React, { useEffect, useState } from 'react'
import './logedin.css'
import axios from 'axios'


function Logedin() {
 let[data,setdata] =useState()
  useEffect(()=>{
    var a=axios.get("http://localhost:3000/home")
    a.then((res)=>{
      setdata(res.data)

    })
  })

  var delfun=(cat)=>{
   
    var con=window.confirm("are you sure");
      if(con===true){
        axios.delete("http://localhost:3000/home"+"/"+cat).then((pro)=>{
          window.location.reload();

      })
      }

  
    
  }
  





  return (
    <>
    <table class="table tablecss">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
      <th scope="col">Course</th>
      <th scope="col">Branch</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  {
    data?  <tbody>
      {
        data.map((item)=>{
       return(
        <>
        <tr>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.num}</td>
        <td>{item.course}</td>
        <td>{item.branch}</td>
        <td><button type="button" class="btn btn-danger" onClick={()=>{delfun(item.id)}}>delete</button></td>
      </tr>
 
      </>
       )
     
          

        })
      }
 
  </tbody>:<p>no data</p>
  }
  
</table>
    </>
  )
}

export default Logedin