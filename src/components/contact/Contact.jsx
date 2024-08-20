import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';


const Contact = () => {
  return (
    <section id="contact"> 
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>gall.abdulshakur@gmail.com</h5>
            <a href="mailto:gall.abdulshakur@gmail.com" target="_blank" >Send a Mesage</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Shakur Galla</h5>
            <a href="https://m.me/shakur-galla" target="_blank">Send a Mesage</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Chat me up on whatsapp</h5>
            <a href="https://api.whatsapp.com/send?phone=+2349031901447" target="_blank">Send a Mesage</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your email" required/>
          <textarea name="message" rows="7" placeholder="Your message..." required></textarea>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact