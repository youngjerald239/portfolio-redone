import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsLinkedin, BsWhatsapp, BsTwitter} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zozgbjb', 'template_ulnndbh', form.current, 'PL4LSRuRjmMPHTMF_')

    e.target.reset()  
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
          <div className="contact_options">
             <article className="contact_option">
                <MdOutlineMailOutline className='contact_option-icon'/>
                <h4>Email</h4>
                <h5>youngjerald239@gmail.com</h5>
                <a href="mailto:youngjerald239@gmail.com" target="_blank" rel="noreferrer">Send an Email</a>
             </article>
             <article className="contact_option">
                <BsLinkedin className='contact_option-icon'/>
                <h4>LinkedIn Message</h4>
                <h5>youngjerald239@gmail.com</h5>
                <a href="https://www.linkedin.com/in/jerald-young-232aa720a/" target="_blank" rel="noreferrer">Connect with LinkedIn</a>
             </article>
             <article className="contact_option">
                <BsWhatsapp className='contact_option-icon'/>
                <h4>WhatsApp</h4>
                <h5>Phone Messenger</h5>
                <a href="https://api.whatsapp.com/send?phone=18032717767" target="_blank" rel="noreferrer">Send a message</a>
             </article>
             <article className="contact_option">
                <BsTwitter className='contact_option-icon'/>
                <h4>Twitter</h4>
                <h5>https://twitter.com/messages</h5>
                <a href="https://twitter.com/messages/compose?recipient_id={JeraldYoung19}" target="_blank" rel="noreferrer">Private Twitter message</a>
             </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
             <input type="text" name='name' placeholder='Your Full Name' required/>
             <input type="email" name='email' placeholder='Email Address' required/>
             <textarea name="message" rows="7" placeholder='Enter your message here' required></textarea>
             <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
       </div>
    </section>
  )
}

export default Contact