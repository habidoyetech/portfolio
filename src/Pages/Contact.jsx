import React from 'react';
import './contact.css'
import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineSend} from 'react-icons//ai'
import {HiOutlineMail} from 'react-icons/hi'
import {MdLocationOn} from 'react-icons/md'


const Contact = () => {
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
          <form action="" className='contact_form grid-contact'>
            <div className='contact_inputs grid-contact'>
              <div className="contact_content">
                <label htmlFor="" className='contact_label'>Name</label>
                <input type="text" className='contact_input' />
              </div>
              <div className="contact_content">
                <label htmlFor="" className='contact_label'>Email</label>
                <input type="text" className='contact_input' />
              </div> 
            </div>
            <div className="contact_content">
              <label htmlFor="" className='contact_label'>Project</label>
              <input type="text" className='contact_input' />
            </div>
            <div className="contact_content">
              <label htmlFor="" className='contact_label'>Message</label>
              <textarea name="" id="" cols="30" rows="10" className="contact_input"></textarea>
            </div>
            <div>
              <a href="#" className="button button-flex">
                Send Message
                <AiOutlineSend/>
              </a>
            </div>
          </form>
        </div>
       
    </section>
  )
}

export default Contact
