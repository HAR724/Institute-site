import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import  Java from './Java'
import Python from './Python'
import Nete from './Nete'
import Certificate from './Certificate'
import Certificatea from './Certificatea'
import Certificateveri from './Certificateveri'
import Placement from './Placement'
import Contact from './Contact'
import Login from './Login'
import Logedin from './Logedin'
import Nav2 from './Nav2'
import Logcourse from './Logcourse'
import Logcerti from './Logcerti'
import Logcontact from './Logcontact'
import Logconnect from './Logconnect'


function App() {

  return (
<>
<BrowserRouter>
<Nav/>
<Nav2/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about us' element={<About/>}/>
<Route path='/java' element={<Java/>}/>
<Route path='/python' element={<Python/>}/>
<Route path='/net' element={<Nete/>}/>
<Route path="/certificate" element={<Certificatea/>}/>

  <Route path='/certificatea' element={<Certificatea/>}/>
  <Route path='/certificateveri' element={<Certificateveri/>}/>
  <Route path='/placement' element={<Placement/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/logedin' element={<Logedin/>}/>
  <Route path='/logedin/course' element={<Logcourse/>}/>
  <Route path='/logedin/certificate' element={<Logcerti/>}/>
  <Route path='/logedin/contact' element={<Logcontact/>}/>
  <Route path='/logedin/connect' element={<Logconnect/>}/>
  




</Routes>
<Footer/>




</BrowserRouter>




</>


  )
}

export default App
