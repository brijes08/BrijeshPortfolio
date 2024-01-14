import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Main from "./components/Main"
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import MyProjects from './components/MyProjects'
// import Contact from './components/Contact'
import Profile from "./components/Profile"
import Login from './components/Login'
import Signup from "./components/Signup"
// import Logout from "./components/Logout"
import ThankYou from "./components/ThankYou"
import ErrorPage from "./components/ErrorPage"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
     <Header />
     <Routes>
      <Route exact="true" path='/' element={<Main />} />
      <Route exact="true" path='/about' element={<About />} />
      <Route exact="true" path='/services' element={<Services />} />
      <Route exact="true" path='/skills' element={<Skills />} />
      <Route exact="true" path='/myprojects' element={<MyProjects />} />
      {/* <Route exact="true" path='/contact' element={<Contact />} /> */}
      <Route exact="true" path='/profile' element={<Profile />} />
      <Route exact="true" path='/login' element={<Login />} />
      <Route exact="true" path='/signup' element={<Signup />} />
      {/* <Route exact="true" path='/logout' element={<Logout />} /> */}
      <Route exact="true" path='/thankyou' element={<ThankYou />} />
      <Route path='*' element={<ErrorPage />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
