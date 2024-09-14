import React from 'react'
import Home from './Components/Home/Home'
import { Route, Routes } from "react-router-dom";
import Courses from './Components/Courses/Courses';
import Signup from './Components/Signup';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/course' element={<Courses />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
