import React from 'react'
import Navbar from '../Navbar/Navbar'
import './styles.css'
import contact from '../Images/contact.jpg'

function Contact() {
  return (
    <div>
        <Navbar/>
        <section id="contact">
        <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
                <img src={contact}/>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
                <h1>CONTACT US</h1>
                <form class="mb-3">
                    <input type="text" class="form-control" placeholder="Enter your name"/>
                    <input type="mail" class="form-control" placeholder="Enter your mail"/>
                    <textarea class="form-control" placeholder="Enter your message"></textarea>
                    <button class="btn signin">Send Message</button>
                </form>
            </div>
            </div>
            </div>
            </section>
    </div>
  )
}

export default Contact