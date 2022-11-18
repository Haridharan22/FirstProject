import React from 'react'
import About from './About/About'
import Home from './Home/Home'
import Contact from './Contact/Contact'
//Routes using navigation move to one component to another component
import {Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Cart/Product'


function Mainpage() {
  return (
    <div>
          <Routes>
            
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
     <Route path='/Product' element={<Product />}/>
      <Route path='Contact' element={<Contact />} />
    </Routes>
    </div>
  )
}

export default Mainpage