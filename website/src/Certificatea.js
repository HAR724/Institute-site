import React from 'react'
import './certifiacate.css'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Certificatea() {
let [name,setname]=useState()
let [phn,setphn]=useState()
let [email,setemail]=useState()
let [course,setcourse]=useState()
let [center,setcenter]=useState()
let [faculty,setfaculty]=useState()
let [ducatid,setducatid]=useState()
let [startm,setstartm]=useState()
let [endm,setendm]=useState()


var certisub=(e)=>{
e.preventDefault();
axios.post("http://localhost:3000/certificate",{name,phn,email,course,center,faculty,ducatid,startm,endm}).then((res)=>{
  window.location.reload();
})

}


  return (
    <>
    <Outlet/>
 <div>
        <div className={'certificatediv'}>
         <Link to="/Certificatea" className={"certificatea"}>Certificate</Link>
            <Link to="/certificateveri"  className={'certificateb'}>Verify Certificate</Link>
            <hr/>
            
        </div>
        <div  className={'divofcerti'}>
                <div className={'certificateinput'}>
                    <h1 className={'applycerti'}>Apply For Certificate</h1>
                    <form>
                    <div>
                    <label for="inputname" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputname" onChange={(e)=>{setname(e.target.value)}}/>
                    </div>
                    <div>
                    <label for="inputphone" class="form-label ">Phone</label>
                    <input type="text" class="form-control phone" id="inputphone"onChange={(e)=>{setphn(e.target.value)}}/>
                    </div>
                    <div className={'divemail'}>
                    <label for="inputemail" class="form-label ">Email</label>
                    <input type="email" class="form-control email" id="inputemail" onChange={(e)=>{setemail(e.target.value)}}/>
                    </div>
                    <div className={'divCourse'}>
                    <label for="inputcourse" class="form-label">Course</label>
                    <select className="form-select phone" onChange={(e)=>{setcourse(e.target.value)}}>
                   <option disabled selected>Select Course</option>
                   <option value="java" >java</option>
                   <option value="python">python</option>
                   <option value=".net">.net</option>
                     </select>
                    </div>
                    <div className={'divcenter'}>
                    <label for="inputcenter" class="form-label">Center</label>
                    <select id="inputcenter" class="form-select phone" onChange={(e)=>{setcenter(e.target.value)}}>
                    <option disabled selected>select center</option>
                    <option>Noida sector-63</option>
                    <option>Noida sector-16</option>
                    <option>Delhi</option>
                    </select>
                    </div>
                    <div className={'divfacul'}>
                    <label for="inputfaculty" class="form-label">Faculty</label>
                    <input type="text" class="form-control phone" id="inputfaculty" onChange={(e)=>{setfaculty(e.target.value)}}/>
                    </div>
                    <div className={'divid'}>
                    <label for="inputducat" class="form-label">Ducat id</label>
                    <input type="text" class="form-control phone" id="inputducat" onChange={(e)=>{setducatid(e.target.value)}}/>
                    </div>
                    <div className={'divstart'}>
                    <label for="inputstartmonth" class="form-label">Start month</label>
                    <input type="month" class="form-control phone" id="inputstartmonth" onChange={(e)=>{setstartm(e.target.value)}}/>
                    </div>
                    <div className={'divend'}>
                    <label for="inputendmonth" class="form-label">End month</label>
                    <input type="month" class="form-control phone" id="inputendtmonth" onChange={(e)=>{setendm(e.target.value)}}/>
                    </div>
                    <div className="submitfrm">
                    <button type="submit" class="btn btn-primary submitf" onClick={certisub}>Submit</button>
                    </div>



                    </form>
                 
                    


                </div>
            </div>




    </div>

    </>
  )
}

export default Certificatea