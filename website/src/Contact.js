import React, { useState } from 'react'
import './contact.css'

import axios from 'axios'
function Contact() {
  var bra=[
    {branch:"Noida Sector 16",phno:9999993213,email:"info@ducatindia.com",addr:" A-43 & A-52, Sector 16, Behind MacD, Noida, 201301, UP"},
    {branch:"Sector 63, Noida",phno: 7042175774,email:"info@ducatindia.com",addr:"H-43, Sector-63, Noida (Near Electronic City Metro Station)"},
    {branch:"Pitampura",phno:7042336264,email:"info@ducatindia.com",addr:"Plot No. 366, 2nd Floor, Kohat Enclave, Pitampura, ( Near- Kohat Metro Station) Above Allahabad Bank, New Delhi- 110034."},
    {branch:"South Ex.",phno:9811612707,email:"info@ducatindia.com",addr:" D-27,South Extension-1 New Delhi-110049"},
    {branch:"Ghaziabad",phno:9810851363,email:"info@ducatindia.com",addr:"Anand Industrial Estate Near ITS College, Mohan Nagar Ghaziabad (U.P.)"},
    {branch:"Gurugram",phno:9873477222,email:"info@ducatindia.com",addr:"1808/2, 2nd FLOOR OLD DLF NEAR HONDA SHOWROOM, SECTOR-14, Gurgaon (Haryana)"},
  ]


 let [name,setname] =useState()
 let [email,setemail] =useState()
 let [phn,setphn] =useState()
 let [course,setcourse] =useState()
 let [branch,setbranch] =useState()
 let [mess,setmess] =useState()


 var contsub=(e)=>{
  e.preventDefault()
  axios.post("http://localhost:3000/contact",{name,email,phn,course,branch,mess}).then((res)=>{
    window.location.reload();

  })
 }




  return (
    <>
    <div>
        <img src='Images/ducatpic.png' alt='...' height="500px" width="100%"/>
    </div>
    <div className={'divfrmcon'}>
        <h1  className={'h1con'}>Connect with Us</h1>
        <p className={'paracon'}>For further questions, including partnership opportunities, please email mail to: info<b>@ducatindia.com</b> <br/><p className={'btwcon'}>or contact using our contact form.</p></p>
        <form>
        <div class="mb-3 divconname">
         <label for="exampleFormControlInput1" class="form-label"><b>Full Name</b></label>
         <input type="text" class="form-control contactname" id="exampleFormControlInput1"  placeholder="Name" onChange={(e)=>{setname(e.target.value)}}/>
         </div> 
         <div class="mb-3 divconemail">
         <label for="exampleFormControlInput2" class="form-label"><b>Email</b></label>
         <input type="email" class="form-control contactname" id="exampleFormControlInput2" placeholder="email" onChange={(e)=>{setemail(e.target.value)}}/>
         </div> 
         <div class="mb-3 divconnum">
         <label for="exampleFormControlInput3" class="form-label"><b>Phone number</b></label>
         <input type="text" class="form-control contactname" id="exampleFormControlInput3" placeholder="phone number" onChange={(e)=>{setphn(e.target.value)}}/>
         </div>
         <div class="mb-3 divconcou">
         <label for="exampleFormControlInput4" class="form-label"><b>Courses</b></label>
         <select class="form-select contactname" aria-label="Default select example"  id="exampleFormControlInput4" onChange={(e)=>{setcourse(e.target.value)}}>
        <option  disabled selected>select</option>
        <option value="java">java</option>
        <option value="python">python</option>
        <option value="net">.net</option>
        </select>
        </div>
        <div class="mb-3 divconbra">
         <label for="exampleFormControlInput5" class="form-label"><b>Branch</b></label>
         <select class="form-select contactbranch" aria-label="Default select example"  id="exampleFormControlInput5" onChange={(e)=>{setbranch(e.target.value)}}>
        <option  disabled selected>select</option>
        <option value="Noida sector-63">Noida sector-63</option>
        <option value="Noida sector-16">Noida sector-16</option>
        <option value="Delhi">Delhi</option>
        </select>
        </div>
        <div class="mb-3 divconmes">
        <label for="exampleFormControlInput6" class="form-label"><b>How can i help you</b></label>
        <textarea for="exampleFormControlInput6" class="form-control contactbranch" aria-label="Default select example" cols="60" rows="5" placeholder="message " onChange={(e)=>{setmess(e.target.value)}}></textarea>

         </div>
         <div className="mb-3 divconbtn">
                    <button type="submit" class="btn btn-primary divconbtn1" onClick={contsub}>Submit</button>
                    </div>
        </form>
    </div>
    <div className={'bradiv'}>
      <h1 className={'ourbrah1'}>Our Branches</h1>
      <div>
      <div>
      <div class="col-sm-6 mb-3 mb-sm-0 inlinecard1">
       <div class="card bracard  ">
       <div class="card-body">
        <h5 class="card-title bratit">{bra[0].branch}</h5>
        <p class="card-text">Phone no : {bra[0].phno}</p>
        <p class="card-text">Email : {bra[0].email}</p>
        <p class="card-text">Address : {bra[0].addr}</p>
        
      </div>
    </div>

      </div>
    
    </div>

    <div>
      <div class="col-sm-6 mb-3 mb-sm-0 inlinecard2">
       <div class="card bracard ">
       <div class="card-body">
        <h5 class="card-title bratit">{bra[1].branch}</h5>
        <p class="card-text">Phone no : {bra[1].phno}</p>
        <p class="card-text">Email : {bra[1].email}</p>
        <p class="card-text">Address : {bra[1].addr}</p>
        
      </div>
    </div>

      </div>
    
    </div>

    <div>
      <div class="col-sm-6 mb-3 mb-sm-0 inlinecard3">
       <div class="card bracard">
       <div class="card-body">
        <h5 class="card-title bratit">{bra[2].branch}</h5>
        <p class="card-text">Phone no : {bra[2].phno}</p>
        <p class="card-text">Email : {bra[2].email}</p>
        <p class="card-text">Address : {bra[2].addr}</p>
        
      </div>
    </div>

      </div>
    
    </div>

    <div>
      <div class="col-sm-6 mb-3 mb-sm-0 inlinecard4">
       <div class="card bracard">
       <div class="card-body">
        <h5 class="card-title bratit">{bra[3].branch}</h5>
        <p class="card-text">Phone no : {bra[3].phno}</p>
        <p class="card-text">Email : {bra[3].email}</p>
        <p class="card-text">Address : {bra[3].addr}</p>
        
      </div>
    </div>

      </div>
    
    </div>

    <div>
      <div class="col-sm-6 mb-3 mb-sm-0 inlinecard5">
       <div class="card bracard">
       <div class="card-body">
        <h5 class="card-title bratit">{bra[4].branch}</h5>
        <p class="card-text">Phone no : {bra[4].phno}</p>
        <p class="card-text">Email : {bra[4].email}</p>
        <p class="card-text">Address : {bra[4].addr}</p>
        
      </div>
    </div>

      </div>
    
    </div>

    <div>
      <div class="col-sm-6 mb-3 mb-sm-0 inlinecard6">
       <div class="card bracard">
       <div class="card-body">
        <h5 class="card-title bratit">{bra[5].branch}</h5>
        <p class="card-text">Phone no : {bra[5].phno}</p>
        <p class="card-text">Email : {bra[5].email}</p>
        <p class="card-text">Address : {bra[5].addr}</p>
        
      </div>
    </div>

      </div>
    
    </div>
    </div>
    </div>
    <div className={'mapcon1'}>
      <div className={'mapcon'}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.007654851915!2d77.37477247515534!3d28.629532675666407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f8db0936a3%3A0x45b6d2df27348a89!2sDucat%20IT%20Training%20School%20Noida%20Sector-63!5e0!3m2!1sen!2sin!4v1706085303221!5m2!1sen!2sin" width="90%" height="450px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
    </>
  )
}

export default Contact