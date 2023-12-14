import React from 'react';
import './AboutUs.css';
import Navbar from '../../components/Navbar/Navbar';

export default function AboutUs() {
  return (
    <div>
      <Navbar/>
       <div className='home-poster color-light'>
        <div >
          <img className='poster-img' src='https://kaamwalibais.com/assets/about-us-maid.jpg' alt='img' />
        </div>
        <div className='home-poster-text'>
          <h1 className='heding-poster'>Who are we?</h1>
          <h3> </h3>
          <p className='para-text font-size'>
          HomeCareMate, a division of Kaamwalibais, is your ultimate destination for comprehensive home care services , India. With a rich legacy of over news in the domestic assistance industry, HomeCareMate specializes in providing a wide array of services, including 24/7 maid services, domestic help, housemaids, cooks, caretakers, ayahs, peons, nurses, ward boys, babysitters, and elderly care.
          <br/>  <br/>
          As a distinguished private limited company, HomeCareMate operates with a team of seasoned professionals, including Chartered Accountants, Semi Chartered Accountants, and other experts in the field. Our commitment is to offer secure and reliable home assistance solutions to clients throughout India.
          <br/>  <br/>
          Inspired by the essence of the Indian household, HomeCareMate ensures that all your daily needs are met with utmost precision. Our user-friendly software facilitates quick and customized searches, offering real-time attendance information for service providers in your vicinity. With HomeCareMate, your home care needs are in safe and reliable hands, ensuring peace of mind for you and your family.
          </p>
        </div>
      </div>
    </div>
  )
}
