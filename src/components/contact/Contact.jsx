import React, {useRef, useState} from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsLinkedin, BsTwitter} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import ME from '../../assets/me.png'

const Contact = () => {
  const form = useRef();
  // '' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    const target = e.target;
    setStatus('sending');

    emailjs.sendForm('service_zozgbjb', 'template_ulnndbh', form.current, 'PL4LSRuRjmMPHTMF_')
      .then(() => {
        setStatus('sent');
        target.reset();
      })
      .catch(() => setStatus('error'));
  };
  return (
    <section id='contact'>
      <div className="section_heading">
        <p className="eyebrow">Get in touch</p>
        <h2>Contact me</h2>
        <p className="section_intro">Have a project, a role, or a question about my games? Send a message and I'll get back to you.</p>
      </div>

      <div className="container contact_container">
               <div className="contact_profile">
                  <div className="contact_portrait">
                     <img src={ME} alt="Jerald Young" />
                     <span>Let's build<br />something useful.</span>
                  </div>
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
                <BsTwitter className='contact_option-icon'/>
                <h4>Twitter</h4>
                <h5>@JeraldYoung19</h5>
                <a href="https://twitter.com/JeraldYoung19" target="_blank" rel="noreferrer">Message on Twitter</a>
             </article>
                  </div>
              </div>
          <form ref={form} onSubmit={sendEmail}>
             <input type="text" name='name' placeholder='Your Full Name' required/>
             <input type="email" name='email' placeholder='Email Address' required/>
             <textarea name="message" rows="7" placeholder='Enter your message here' required></textarea>
             <button type="submit" className='btn btn-primary' disabled={status === 'sending'}>
               {status === 'sending' ? 'Sending…' : 'Send Message'}
             </button>
             {status === 'sent' && <p className="form_status" role="status">Thanks! Your message was sent.</p>}
             {status === 'error' && <p className="form_status form_status-error" role="alert">That didn't send. Please try again or email me directly.</p>}
          </form>
       </div>
    </section>
  )
}

export default Contact