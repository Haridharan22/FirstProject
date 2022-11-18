import React from 'react'

import Header from './Header';
import Home from './Home';
import Login from './Login';
import Details from './Details';
import Errror from './Errror';
import {Routes,Route} from "react-router-dom"

function Mainlogin() {
  return (
    <div>
      <Header/>
      
        <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='/error' element={<Errror />} />
    </Routes>
    </div>
  )
}

export default Mainlogin