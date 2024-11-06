
import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';

const Contact = () => {
  const form = useRef()
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>vinaykumaryaddulakondu@gmail.com</h5>
                <a href="mailto:vinaykumaryaddulakondu@gmail.com" target='_blank' >Send a message</a>
            </article>
            <article className="contact__option">
              <BsLinkedin className='contact__option-icon'/>
                <h4>Linkedin</h4>
                <h5>Vinay Kumar</h5>
                <a href="https://www.linkedin.com/in/vinaykumar0517/" target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
                <h4>WhatsApp</h4>
                <h5>+91 7981523094</h5>
                <a href="https://api.whatsapp.com/send?phone=917981523094" target='_blank'>Send a message</a>
            </article>
        </div>
        <form ref={form} action='https://formspree.io/f/xvoeozer' method='post'>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact