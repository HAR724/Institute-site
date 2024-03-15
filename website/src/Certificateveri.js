import React from 'react'
import './certifiacate.css'
import { Link } from 'react-router-dom'

function Certificateveri() {
  return (
   <>
   <div>
        <div className={'certificatediv'}>
         <Link to="/Certificatea" className={"certificatea"}>Certificate</Link>
            <Link to="/certificateveri"  className={'certificateb'}>Verify Certificate</Link>
            <hr/>
            
        </div>
       
        <div  className={'certificateveriout'}>
                <div className={'certificateoutput'}>
                    
                    <form>
                    <div>
                    <input type="text" class="form-control ducatid" id="inputname" placeholder="Enter your ducat id here"/>
                    </div>
                    
                    <div className={'ducatsubmitbtn'}>
                        <button type="submit" class="btn btn-primary ducatsubmitbtn2">Submit</button>
                    </div>
                    </form>
                 
                    


                </div>
            </div>
            </div>
           


   </>
  )
}

export default Certificateveri