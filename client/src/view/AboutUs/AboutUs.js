import React from 'react';
import './AboutUs.css';
import Navbar from '../../components/Navbar/Navbar';
import AboutCard from '../../components/AboutCard/AboutCard';
import chandani from './chandani.jpg';
import abhi from './ak.jpg';

export default function AboutUs({AbhijeetKokat}) {
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

<br/>
  <h1 className='heding-poster text-center'>Our Team</h1>
  <div className='devloper-container'>
<AboutCard name={'Chandrajyoti Adil '} description={'I doing BE in cs branch from RTMOU, Nagpur'} hedline={'MERN Stack Devloper'} image={chandani} github={'https://github.com/chandrajyoti123/'} linkedin={'https://www.linkedin.com/in/chandrajyoti123/'}/>

<AboutCard name={'Abhijeet kokat '} description={'I doing BE in cs branch from HSBPVTS COE, KASHTI'} hedline={'MERN Stack Devloper'} image={abhi} linkedin={'https://www.linkedin.com/in/abhijeetkokat007/'} github={'https://github.com/Abhijeetkokat007/'}/>
</div>


    </div>
  )
}
