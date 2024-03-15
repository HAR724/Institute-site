import React from 'react'
import './placement.css'

function Placement() {
     var obj=[
        {plimg:"Images/pi1.png",name:"Pranav Mittal",jprofi:"Software Developer",pack:"5 LPA/-",Company:"NovelVOX"},
        {plimg:"Images/pi2.png",name:"Rahul Yadav",jprofi:"Java Developer",pack:"9 LPA/-",Company:"Sun Life India Service"},
        {plimg:"Images/pi3.png",name:"Rishabh Thakur",jprofi:"Coordinator",pack:"6 LPA",Company:"HSA AND PARTNERS"},
        {plimg:"Images/pi4.png",name:"Piyush Mishra",jprofi:"Python Developer",pack:"6 LPA",Company:"SSPS Global Pvt. Ltd."},
        {plimg:"Images/pi5.png",name:"Pankaj Kumar Singh",jprofi:"Dot Net Developer",pack:"12 LPA ",Company:"Cognizant"},
        {plimg:"Images/pi6.png",name:"Suresh Patle",jprofi:"Java Developer",pack:"6 LPA",Company:"CMS Computer Ltd."},
        {plimg:"Images/pi7.png",name:"Vishal Kumar",jprofi:"Dot Net Developer",pack:"7.5 LPA",Company:"Digistorm"},
     ]
  return (
   <div>

    <div className={'divbestplac'}>
        <h1 className={'bestplach1'}>Best placements offered</h1>
        <h3 className={'bestplach3'}>We provide best career Guidance Along with suitable placements.</h3>
        </div>
    <div >
    <div class="card-group cardsgrpdiv">
  <div class=" cardplac">
    <img src={obj[0].plimg} className="card-img-top" alt="..." height="180px"  width="20px"/>
    <div class="card-body bodycards">
      <p>Name:{obj[0].name}</p>
      <p>Job Profile:{obj[0].jprofi}</p>
      <p>Package:{obj[0].pack}</p>
      <p>Company:{obj[0].Company}</p>
    </div>
  </div>
  <div class=" cardplac">
    <img src={obj[1].plimg} class="card-img-top" alt="..." height="180px"  width="20px"/>
    <div class="card-body bodycards">
      <p>Name:{obj[1].name}</p>
      <p>Job Profile:{obj[1].jprofi}</p>
      <p>Package:{obj[1].pack}</p>
      <p>Company:{obj[1].Company}</p>
    </div>
  </div>
  <div class=" cardplac">
    <img src={obj[2].plimg} class="card-img-top" alt="..." height="180px"  width="20px"/>
    <div class="card-body bodycards">
      <p>Name:{obj[2].name}</p>
      <p>Job Profile:{obj[2].jprofi}</p>
      <p>Package:{obj[2].pack}</p>
      <p>Company:{obj[2].Company}</p>
    </div>
  </div>
  <div class=" cardplac">
    <img src={obj[3].plimg} class="card-img-top" alt="..." height="180px"  width="20px"/>
    <div class="card-body bodycards">
      <p>Name:{obj[3].name}</p>
      <p>Job Profile:{obj[3].jprofi}</p>
      <p>Package:{obj[3].pack}</p>
      <p>Company:{obj[3].Company}</p>
    </div>
  </div>
  <div class=" cardplac">
    <img src={obj[4].plimg} class="card-img-top" alt="..." height="180px"  width="20px"/>
    <div class="card-body bodycards">
      <p>Name:{obj[4].name}</p>
      <p>Job Profile:{obj[4].jprofi}</p>
      <p>Package:{obj[4].pack}</p>
      <p>Company:{obj[4].Company}</p>
    </div>
  </div>
  <div class=" cardplac">
    <img src={obj[5].plimg} class="card-img-top" alt="..." height="180px"  width="20px"/>
    <div class="card-body bodycards">
      <p>Name:{obj[5].name}</p>
      <p>Job Profile:{obj[5].jprofi}</p>
      <p>Package:{obj[5].pack}</p>
      <p>Company:{obj[5].Company}</p>
    </div>
  </div>
  <div class=" cardplac ">
    <img src={obj[6].plimg} class="card-img-top" alt="..." height="180px"  width="20px"/>
    <div class="card-body bodycards">
      <p>Name:{obj[6].name}</p>
      <p>Job Profile:{obj[6].jprofi}</p>
      <p>Package:{obj[6].pack}</p>
      <p>Company:{obj[6].Company}</p>
    </div>
  </div>

</div>


    </div>
    <div className={'h2plc'}>
        <h2>Our Placement Partner</h2>
    </div>
    <div className={'logoddiv'}>
        <div className={'logosliderdiv'}>
            <img src="Images/logoairtel.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>
            <img src="Images/logotcs.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>

            <img src="Images/logohdfc.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>

            <img src="Images/logoici.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>
            <img src="Images/logoinfo.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>
            <img src="Images/logoitc.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>
            <img src="Images/logouni.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>
            <img src="Images/logotata.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>
            <img src="Images/logomahni.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>
            


        </div>
        <div className={'logosliderdiv'}>
            <img src="Images/logoairtel.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>
            <img src="Images/logotcs.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>

            <img src="Images/logohdfc.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>

            <img src="Images/logoici.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>
            <img src="Images/logoinfo.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>
            <img src="Images/logoitc.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>
            <img src="Images/logouni.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>
            <img src="Images/logotata.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>
            <img src="Images/logomahni.png" alt='..'  height="100px" width="100px" className={'slideimgs'}/>
            


        </div>
    </div>
   </div>
  )
}

export default Placement