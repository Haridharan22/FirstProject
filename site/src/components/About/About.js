import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'
import about from '../Images/about.png'



function About() {
  
  return (
    <div>
        <Navbar/>
        <section id="about">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12 my-2">
                  <img src={about}/>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <h1>ABOUT US</h1>
                    <p>Utilizing a machine called an autoclave, all bacteria, viruses and fungal spores are effectively destroyed by a combination of air pressure and superheated water. This strategy is so effective, that it is used by hospitals to turn highly pathogenic waste material, into a harmless by-product that can be disposed of safely in landfill. Steam sterilization does this while actually avoiding the higher temperatures needed by dry methods, to protect more sensitive ingredients. In fact, ingredients that are steam sterilized for a mere 3 minutes, at 275 °F can achieve the same degree of sterility as hot, dry air methods used for two hours at 320 °F. For suitable ingredients, steam treatment represents the cutting edge in organic compatible sterilization techniques, while not requiring the use of any hazardous materials unpopular with consumers (like synthetic chemicals or radiation).
                        is so effective, that it is used by hospitals to turn highly pathogenic waste material, into a harmless by-product that can be disposed of safely in landfill. Steam sterilization does this while actually avoiding the higher temperatures needed by dry methods, to protect more sensitive ingredients. In fact, ingredients that are steam sterilized for a mere 3 minutes, at 275 °F can achieve the same degree of sterility as hot, dry air methods used for two hours at 320 °F. For suitable ingredients, steam treatment represents the cutting edge in organic compatible sterilization techniques, while not requiring the use of any hazardous materials unpopular with consumers (like synthetic chemicals or radiation).
                        
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About