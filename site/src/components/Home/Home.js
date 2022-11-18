import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import background from '../Images/bg.jfif'


function Home() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
        <Navbar/>
        <section id="home">
        <h1 class="text-center">
            Organic Spices
        </h1>
        <p>Variety's the very spice of life, That gives it all its flavor</p>
        <div class="input-group m-4">
            <input type="text" class="form-control" placeholder="Email Address"/>
            <button class="btn signin">Get Started</button>
        </div>
      </section>
    </div>
  )
}

export default Home