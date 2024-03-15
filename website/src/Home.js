import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import "./home.css"
import { GiGiftOfKnowledge } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { SiGooglescholar } from "react-icons/si";
import { GiStarsStack } from "react-icons/gi";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'



function Home(){
  let[name,setname]=useState()
  let[email,setemail]=useState()
  let[num,setnum]=useState()
  let[course,setcourse]=useState()
  let[branch,setbranch]=useState()
  let navigate=useNavigate()

 var homesub=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:3000/home",{name,email,num,course,branch}).then((res)=>{
    window.location.reload()

  })
  

 }





   var data=[
    {pimg:"Images/person1.jpeg",name:"Sarthak Sinha",text:"This review is for Lokendra sir...one of the best teacher for networking...i joined for CCNA last year and sir you have made it so easy to understand each and every concept...i cleared my interview for l&t infotech and all thanks to you sir for making the basics clear because to remember concepts of CCNA even after one year shows how well a mentor has taught the subject...one of the best mentor for CCNA and CCNP...thanx once again sir..."},
    {pimg:"Images/pic2.jpeg",name:"Prashant Sharma",text:"Hello Everyone. I am learning complete JAVA (Core+Advanced) from Ducat. I would like to thanks to Manish Sir who teaches and guides students from depth of their heart. His teaching style is awesome. All teachers of Ducat are very helpful. Any problems which is faced by students, is solved by Manish Sir or other teachers. I have selected in MindzView Company while studying in Ducat. If you want to become something great in IT field, I prefer you to join Ducat."},
    {pimg:"Images/pic3.jpeg",name:"Prabhat Kumar",text:"When u speak about java training,the best institute is ducat and the perfect trainer is manish sir,his way of teaching is too good....."},
    {pimg:"Images/pic4.jpeg",name:"Shubham Gupta",text:"This review is about sachin sir who teaches me java. It's a good workplace to learn something where you can gain a lot of knowledge from a professional Live coding is done where you learn a lot.. And live projects are conducted where you are given the opportunity to make your own project..."},
     {pimg:"Images/pic5.jpeg",name:"Bhanu Gautam",text:"Ducat is very nice institute Manish sir is the best teacher for java He will solved your problem He will teach you like your father He will scold you ,his real life example were awesome...easy to remember ... Thank you so much manish .."},
     {pimg:"Images/pic6.jpeg",name:"Rahul Choudhary",text:"I joined ducat for learning core java under the guidance of Mr.Mayur sir..he according to me is one of the most dedicated teacher off all the times.He along with his stories made us understand all the concept thoroughly. he is best teacher ..giving very deep knowledge about all concept in java.......it was seriously a great experience."},
     {pimg:"Images/pic7.jpeg",name:"Dev Arya",text:"Being a Mechanical Engineer, I was quite afraid to move into the IT industry but with the help of great faculty and placement cell I got placed in a well-reputed company as a Java Developer."},
   {pimg:"Images/pic8.jpeg",name:"Shailender Bisht",text:"This review is for Mr Vineet Saxena (senior Python and machine learning teacher). He knowledge level is really high and he teaches every student from ground level to top. He focuses and puts efforts on each Nd every individual to make topics clear.And I would highly recommend that if someone is going for machine learning or python ,he is the best teacher you should learn that from."},
   ]

  // var a=data.map((item)=>{
  //    return(`
  //    <div class="card cardwidth"  >
  //    <img src=${item.pimg} className="card-img-top cardimg" alt="..."/>
  //  <div className="card-body ">
  //    <h5 className="card-title">${item.name}</h5>
  //    <p className="card-text" >${item.text}</p>
  //    <a href="#" className="btn btn-primary">Go somewhere</a>
  //    </div>
  //    </div>
    
  //   `)
   
  //  })
  //  document.getElementById("a").innerHTML=a
  
  
let gigi={
    
    position: "relative",
    top: "28px",
    left:"10px"
}
    const images = [
        { url: "images/slider1.png"  },
        { url: "images/slider2.png" },
        { url: "images/slider3.png" },
        { url: "images/slider4.png" },
      
       
      ];
  return (
    <>
   <div>
      <SimpleImageSlider
        width="100%"
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}

      />
    </div>
    <div>
    <div className={'data3'}>
    <ul className={'ul2'}>
    <GiGiftOfKnowledge  style={gigi}/><li className={'li2'}>Learn The Essential Skills</li>
    <TbCertificate  style={gigi}/> <li className={'li2'}>Earn Certificates And Degrees</li>
    <SiGooglescholar style={gigi}/> <li className={'li2'}>Get Ready for The Next Career</li>
    <GiStarsStack style={gigi}/><li className={'li2'}>Master at Different Areas</li>
        </ul>
</div>
        <div className={'data4'}>
            <form onSubmit={homesub}>
            <ul className={'ul3'}>
   <li className={'li3'}><input type='text' name="txt" placeholder='Enter Name' maxLength="10"  className={'input'} onChange={(e)=>{setname(e.target.value)}}/></li>
     <li className={'li3'}><input type='email' name="email" placeholder='Enter Email' className={'input'} onChange={(e)=>{setemail(e.target.value)}}/></li>
    <li className={'li3'}><input type='number' name="num" placeholder='Enter Number'  className={'input'} onChange={(e)=>{setnum(e.target.value)}}/></li>
    <li className={'li3'}><select className={'selectk input'}  onChange={(e)=>{setcourse(e.target.value)}}>
  <option disabled selected>Select Course</option>
  <option value="java" >java</option>
  <option value="python">python</option>
  <option value=".net">.net</option>
</select></li>
    <li className={'li3'}><select className={'selectk input'}  onChange={(e)=>{setbranch(e.target.value)}}>
  <option disabled selected>Select Branch</option>
  <option value="noida 63" >Noida 63</option>
  <option value="noida 16">Noida 16</option>
  <option value="delhi">Delhi</option>
</select></li>
<li className={'li3'}><button type="submit" class="btn btn-primary" >Submit</button></li>

        </ul>
        

            </form>



        </div>
        </div>
        <div>
          <h2 className={'h2'}>Our Learners Work At</h2>
          <p className={'p2'}>Ducat learners work at some of the leading and innovative organizations of <br/>today, solving core business problems.</p>
          <div className={'logo'}>
            <div className={'logoslider'}>
              <img src="Images/logoairtel.png" alt='...' height="100px" width="90px" className='imglogo'/>
              <img src="Images/logohdfc.png" alt='...'height="100px" width="90px" className='imglogo'/>
              <img src="Images/logoici.png" alt='...' height="100px" width="90px" className='imglogo'/>
              <img src="Images/logoinfo.png" alt='...' height="100px" width="90px" className='imglogo'/>
              <img src="Images/logoitc.png" alt='...' height="100px" width="90px" className='imglogo'/>
              <img src="Images/logouni.png" alt='...' height="100px" width="90px" className='imglogo'/>
              <img src="Images/relloga.png" alt='...' height="100px" width="90px" className='imglogo'/>
              <img src="Images/logotata.png" alt='...' height="100px" width="90px" className='imglogo'/>
              <img src="Images/logomahni.png" alt='...' height="100px" width="90px" className='imglogo'/>
            </div>
            <div className={'logoslider'}>
              <img src="Images/logoairtel.png" alt='...' height="100px" width="90px" className='imglogo'/>
              <img src="Images/logohdfc.png" alt='...'height="100px" width="90px" className='imglogo'/>
              <img src="Images/logoici.png" alt='...' height="100px" width="90px" className='imglogo'/>
              <img src="Images/logoinfo.png" alt='...' height="100px" width="90px" className='imglogo'/>
              <img src="Images/logoitc.png" alt='...' height="100px" width="90px" className='imglogo'/>
              <img src="Images/logouni.png" alt='...' height="100px" width="90px" className='imglogo'/>
              <img src="Images/relloga.png" alt='...' height="100px" width="90px" className='imglogo'/>
              <img src="Images/logotata.png" alt='...' height="100px" width="90px" className='imglogo'/>
              <img src="Images/logomahni.png" alt='...' height="100px" width="90px" className='imglogo'/>
            </div>

          </div>



        </div>
       <div className={'div8'}>
        <div className={'div9'}><h1 className={'h1happy'}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hundred<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Of<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Happy Student</h1><p className={'pseveral'}>Several of them where asked how satisfied they are from our courses.Here are the statements</p></div>
       <div className={'div10'}> 
        <div class="card cardwidth"  >
     <img src={data[0].pimg} className="card-img-top cardimg" alt="..."/>
   <div className="card-body ">
     <h5 className="card-title">{data[0].name}</h5>
     <p className="card-text" >${data[0].text}</p>
    
     </div>
     </div>

     <div class="card cardwidth"  >
     <img src={data[1].pimg} className="card-img-top cardimg" alt="..."/>
   <div className="card-body ">
     <h5 className="card-title">{data[1].name}</h5>
     <p className="card-text" >${data[1].text}</p>
    
     </div>
     </div>

     <div class="card cardwidth"  >
     <img src={data[2].pimg} className="card-img-top cardimg" alt="..."/>
   <div className="card-body ">
     <h5 className="card-title">{data[2].name}</h5>
     <p className="card-text" >${data[2].text}</p>
    
     </div>
     </div>
     
     <div class="card cardwidth"  >
     <img src={data[3].pimg} className="card-img-top cardimg" alt="..."/>
   <div className="card-body ">
     <h5 className="card-title">{data[3].name}</h5>
     <p className="card-text" >${data[3].text}</p>
    
     </div>
     </div>
     
     <div class="card cardwidth"  >
     <img src={data[4].pimg} className="card-img-top cardimg" alt="..."/>
   <div className="card-body ">
     <h5 className="card-title">{data[4].name}</h5>
     <p className="card-text" >${data[4].text}</p>
    
     </div>
     </div>
     
     <div class="card cardwidth"  >
     <img src={data[5].pimg} className="card-img-top cardimg" alt="..."/>
   <div className="card-body ">
     <h5 className="card-title">{data[5].name}</h5>
     <p className="card-text" >${data[5].text}</p>
    
     </div>
     </div>
     <div className={'homebacha'}>

     <div class="card cardwidth"  >
     <img src={data[6].pimg} className="card-img-top cardimg" alt="..."/>
   <div className="card-body ">
     <h5 className="card-title">{data[6].name}</h5>
     <p className="card-text" >${data[6].text}</p>
    
     </div>
     </div>

     <div class="card cardwidth"  >
     <img src={data[7].pimg} className="card-img-top cardimg" alt="..."/>
   <div className="card-body ">
     <h5 className="card-title">{data[7].name}</h5>
     <p className="card-text" >${data[7].text}</p>
    
     </div>
     </div>
     </div>
     </div>
        
          
          
        
        
  
    
  
</div>
<div>
<div className={'div11'}><h2>Find the Right Course for You</h2></div>
<div className={'cardsdiv'}>
  <div className={'cardslider'}>

  <div className="card widthcard" >
  <img src="Images/logojava.png" class="card-img-top" alt="..." height="100px" width="100%"/>
  <div className="card-body">
    <h5 className="card-title">Java Spring And Herbinate</h5>
    <img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/>
    <p className="card-text">java spring and herbinate training</p>
    <p className="card-text">Duration: 4 Month</p>
    
    <p className="card-text">Eligibility: Btech/Diploma</p>
    
  </div>
</div>
<div className="card widthcard" >
  <img src="Images/logojango.png" class="card-img-top" alt="..." height="100px" width="100%"/>
  <div className="card-body">
    <h5 className="card-title">Django</h5>
    <img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/>
    <p className="card-text">Django</p>
    <p className="card-text">Duration: 3 Month</p>
    
    <p className="card-text">Eligibility: Btech/Diploma</p>
    
  </div>
</div>
<div className="card widthcard" >
  <img src="Images/logonet.png" class="card-img-top" alt="..." height="100px" width="100%"/>
  <div className="card-body">
    <h5 className="card-title">.Net</h5>
    <img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/>
    <p className="card-text">.Net</p>
    <p className="card-text">Duration: 3 Month</p>
    
    <p className="card-text">Eligibility: Btech/Diploma</p>
    
  </div>
</div>
<div className="card widthcard" >
  <img src="Images/logocad.png" class="card-img-top" alt="..." height="100px" width="100%"/>
  <div className="card-body">
    <h5 className="card-title">Auto Cad</h5>
    <img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/>
    <p className="card-text">Auto Cad</p>
    <p className="card-text">Duration: 2 Month</p>
    
    <p className="card-text">Eligibility: Btech/Diploma</p>
    
  </div>
</div>
<div className="card widthcard" >
  <img src="Images/logotesting.png" class="card-img-top" alt="..." height="100px" width="100%"/>
  <div className="card-body">
    <h5 className="card-title">Software Testing</h5>
    <img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/>
    <p className="card-text">Software Testing</p>
    <p className="card-text">Duration: 3 Month</p>
    
    <p className="card-text">Eligibility: Any Graduate</p>
    
  </div>
</div>



  


  </div>
  <div className={'cardslider'}>

<div className="card widthcard" >
<img src="Images/logojava.png" class="card-img-top" alt="..." height="100px" width="100%"/>
<div className="card-body">
  <h5 className="card-title">Java Spring And Herbinate</h5>
  <img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/>
  <p className="card-text">java spring and herbinate training</p>
  <p className="card-text">Duration: 4 Month</p>
  
  <p className="card-text">Eligibility: Btech/Diploma</p>
  
</div>
</div>
<div className="card widthcard" >
<img src="Images/logojango.png" class="card-img-top" alt="..." height="100px" width="100%"/>
<div className="card-body">
  <h5 className="card-title">Django</h5>
  <img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/>
  <p className="card-text">Django</p>
  <p className="card-text">Duration: 3 Month</p>
  
  <p className="card-text">Eligibility: Btech/Diploma</p>
  
</div>
</div>
<div className="card widthcard" >
<img src="Images/logonet.png" class="card-img-top" alt="..." height="100px" width="100%"/>
<div className="card-body">
  <h5 className="card-title">.Net</h5>
  <img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/>
  <p className="card-text">.Net</p>
  <p className="card-text">Duration: 3 Month</p>
  
  <p className="card-text">Eligibility: Btech/Diploma</p>
  
</div>
</div>
<div className="card widthcard" >
<img src="Images/logocad.png" class="card-img-top" alt="..." height="100px" width="100%"/>
<div className="card-body">
  <h5 className="card-title">Auto Cad</h5>
  <img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/>
  <p className="card-text">Auto Cad</p>
  <p className="card-text">Duration: 2 Month</p>
  
  <p className="card-text">Eligibility: Btech/Diploma</p>
  
</div>
</div>
<div className="card widthcard" >
<img src="Images/logotesting.png" class="card-img-top" alt="..." height="100px" width="100%"/>
<div className="card-body">
  <h5 className="card-title">Software Testing</h5>
  <img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/><img src="Images/star.png" alt=".." height="20px" width="20px"/>
  <p className="card-text">Software Testing</p>
  <p className="card-text">Duration: 3 Month</p>
  
  <p className="card-text">Eligibility: Any Graduate</p>
  
</div>
</div>






</div>
  

  
</div>






</div>







       
  
    </>
  )
}

export default Home