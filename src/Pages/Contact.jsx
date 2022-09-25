import React, { useState } from 'react';
import './contact.css'
import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineSend} from 'react-icons//ai'
import {HiOutlineMail} from 'react-icons/hi'
import {MdLocationOn} from 'react-icons/md'
import {send} from 'emailjs-com'


const Contact = () => {

  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    from_project: '',
    from_message: ''
  })

  const handleChange = (e) => {
    setToSend((prevState) => ({...prevState, [e.target.name]:e.target.value}))
    
  }

  const onSubmit = event => {
    event.preventDefault()
    send(
      'service_4j0qdbv',
      'template_68qj9g2',
      toSend,
      'FyoWBoqXPijnocB5a'
    ).then((response) => {
      alert("Thanks for contacting, will reply soon")
      console.log('SUCCESS', response.status, response.text)
    }).catch((err) => {
      alert ('Your message was not delivered')
      console.log('FAILED', err)
    })
  }

  return (
    <section id='contact'>
        <h2 className='section_title'>Contack Me</h2>
        <p className='section_subtitle'>If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I’d love to help with it</p>
        <div className='contact_container container grid-contact'>
          <div>
            <div className='contact_information'>
              <BiPhoneCall className='contact_icon'/>
              <div>
                <h3 className='contact_title'>Call Me</h3>
                <span className='contact_subtitle'> +2348100352118 </span>
              </div>
            </div>
            <div className='contact_information'>
              <HiOutlineMail className='contact_icon'/>
              <div>
                <h3 className='contact_title'>Email</h3>
                <span className='contact_subtitle'> abidoyeabiodun97@gmail.com </span>
              </div>
            </div>
            <div className='contact_information'>
              <MdLocationOn className='contact_icon'/>
              <div>
                <h3 className='contact_title'>Location</h3>
                <span className='contact_subtitle'> Ibadan, Oyo State </span>
              </div>
            </div>
          </div>
          <form action=""  onSubmit={onSubmit} className='contact_form grid-contact'>
            <div className='contact_inputs grid-contact'>
              <div className="contact_content">
                <label htmlFor="" className='contact_label' >Name</label>
                <input type="text" onChange={handleChange} className='contact_input' name='from_name' value={toSend.from_name}/>
              </div>
              <div className="contact_content">
                <label htmlFor="" className='contact_label'>Email</label>
                <input type="text" onChange={handleChange} className='contact_input' name='from_email' value={toSend.from_email}/>
              </div> 
            </div>
            <div className="contact_content">
              <label htmlFor="" className='contact_label'>Project</label>
              <input type="text" onChange={handleChange} className='contact_input' name='from_project'value={toSend.from_project}/>
            </div>
            <div className="contact_content">
              <label htmlFor="" className='contact_label'>Message</label>
              <textarea name="from_message" onChange={handleChange} id="message" cols="30" rows="10" className="contact_input" value={toSend.from_message}></textarea>
            </div>
            <div>
              <button type='submit' className='button button-flex'>
                Send Message
                <AiOutlineSend/>
              </button>
            </div>
          </form>
        </div>
       
    </section>
  )
}

export default Contact
