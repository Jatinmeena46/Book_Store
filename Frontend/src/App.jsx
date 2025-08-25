import React from 'react'
import Home from './home/home'
// import Course from './components/Course'
import { Routes,Route } from "react-router-dom"
import Courses from './courses/Courses'
function App() {
  return (
    <>
  {/* <Home/>
  <Course/> */}
   <div>
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={<Courses/>}/>
  </Routes>
   </div>
    </>
  )
}

export default App
