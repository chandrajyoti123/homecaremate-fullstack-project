import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import phone from './phone.png'
import pin from './pin.png'

export default function Footer() {
  return (

    <div>
     
      <div className='footer'>
        <div className='footer1'>
            <div className='footer-heading '>about us</div>
            <div className='about-us col-light'>
            We at Home Care Mates provide part-time and full-time housemaids, cooks, babysitters, patient care, and elderly care in all over world, india, and america.
            </div>
        </div>
        <div className='footer2'>
        <div className='footer-heading'>quik links</div>
        <ul >
            <li><Link to={'/services'} className='footer-link '>services</Link></li>
            <li><Link to={'/pricing'} className='footer-link'>pricing</Link></li>
            <li><Link to={'/Security'} className='footer-link'>security</Link></li>
            <li><Link to={''} className='footer-link'>term & condition</Link></li>
            <li><Link to={'/aboutus'} className='footer-link'>about us</Link></li>
            <li><Link to={'/jobhere'} className='footer-link'>job</Link></li>
            

        </ul>
        </div>
        <div className='footer2'>
        <div className='footer-heading'>services</div>
        <ul>
            <li><Link  to={'/services'}  className='footer-link'>home maid</Link></li>
            <li><Link  to={'/services'} className='footer-link'>home cook</Link></li>
            <li><Link  to={'/services'} className='footer-link'>baby sitter</Link></li>
            <li><Link  to={'/services'} className='footer-link'>nanny/japa</Link></li>
            <li><Link  to={'//services'} className='footer-link'>patient caretaker</Link></li>
        
            

        </ul>
        </div>
        <div className='footer4'>
            <img src={pin} className='pin-img'/>
            <img src={phone} className='phone-img'/>
        <div className='footer-heading'>contact us</div>
        <div className='footer4-con col-light'>
       <div className='footer-subheading'>office address </div>
      <div className='footer-add'>
      Shop No B-1B, Bhagat Singh Nagar No 1, Link Road, Near Ambemata Mandir, Goregaon West, Mumbai 400 104 
      </div>
      </div>
      <div className='footer4-con col-light'>
       <div className='footer-subheading'>phone no</div>
      <div className='footer-add'>
      7559223041
      </div>
      </div>
        </div>

      </div>
    </div>
  )
}
