
import React from 'react'
import { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  const [card, setCard] = useState([])

  const loadData = async () => {
    const responce = await axios.get("/api/jobs")
    // const response = await axios.get('/api/jobs')
    setCard(responce?.data?.data)
    console.log(responce?.data?.data)

  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <Navbar />
      <div className='heding-poster-container'>
        <h3>Maid, Cook, Baby Sitters, Patient Care and Elder Care Services in Your City.</h3>
        <h1>_______</h1>
        <h1 className='pt-100'> </h1>
        <h1 className=' '> HomeCareMate </h1>
        <p>Helper4U offers professional domestic services such as maids, cooks, babysitters, patient care, and elder care in Your City.</p>
      </div>

      <div className='home-poster'>
        <div >
          <img className='poster-img' src='https://www.bookmybai.com/images/home-bai-img.png' alt='img' />
        </div>
        <div className='home-poster-text'>
          <h1 className='heding-poster'>Welcome to HomeCareMate</h1>
          <h3> </h3>
          <p className='para-text'>Welcome to HomeCareMate, your trusted online platform connecting households with reliable domestic help. Just like Kamvali, we understand the importance of finding skilled and trustworthy assistance for your home. Helper4U simplifies the hiring process, offering a seamless experience for both employers and job seekers. Explore our comprehensive database of verified professionals, whether you're seeking domestic helpers, caregivers, or other household services. With Helper4U, discover the right match for your needs, ensuring a secure and efficient solution for all your domestic staffing requirements.</p>
        </div>
      </div>
      
      <div className='col-light'>
      <h1 className='img-container col-blue'> Why Use HomeCareMate </h1>
      <div className='whyuse-card'>
        
        <div className='use-card'>
          <h3 className='p-10 '> Verified Professionals </h3>
          <p className='col-black'>HomeCareMate takes the hassle out of hiring by providing a platform with verified and background-checked domestic helpers. Trust and reliability are at the core of our service.</p>
        </div>

        <div className='use-card'>
          <h3 className='p-10 '> Comprehensive Database </h3>
          <p className='col-black'>Explore a diverse and extensive database of skilled professionals, including domestic helpers, caregivers, and other household service providers. Helper4U offers a wide range of options to cater to your specific needs </p>
        </div>

        <div className='use-card'>
          <h3 className='p-10 '> Simplified Hiring Process </h3>
          <p className='col-black'>Our user-friendly platform streamlines the hiring process, making it easy for both employers and job seekers. Say goodbye to the complexities of finding the right domestic help </p>
        </div>

        <div className='use-card'>
          <h3 className='p-10 '> Secure and Transparent </h3>
          <p className='col-black'> We prioritize your safety and security. Helper4U ensures a transparent hiring process, with clear information on candidates and a commitment to protecting your privacy.</p>
        </div>

        <div className='use-card'>
          <h3 className='p-10 '> Efficient Matchmaking </h3>
          <p className='col-black'>Save time and effort with our efficient matchmaking system. Helper4U connects you with professionals who align with your requirements, ensuring a successful and satisfying hiring experience. </p>
        </div>

        <div className='use-card'>
          <h3 className='p-10 '> Supportive Community </h3>
          <p className='col-black'>Join a supportive community of employers and job seekers. Helper4U fosters a positive environment, encouraging open communication and collaboration. </p>
        </div>
        </div>
      </div>
     <h1 className='img-container'>Our Services</h1>
      <div className='scroll'>
        {
          card.map((card, i) => {
            const { first_name, last_name, phoneno, email, image, address, adharno, gender, age, jobcategory, shift } = card;

            return (
              <div className='job-card'>
                <div className='img-container'>
                  <img className='img-card' src={image} />
                </div>
                <h3>Name : {first_name} {last_name}</h3>
                <p>Addar No : {adharno}</p>
                <p>Mobile No : {phoneno}</p>
                <p>Type: {jobcategory}</p>

                <p className='p-10'>< hr /></p>
                <p>Address : {address}</p>

              </div>

            )
          })
         
        }
       

      </div>
     <div className='img-container'>
     <button type='button' className='btn btnjob mar-center' onClick={ ()=>{
          window.location.href = '/services'
         }}>Show more</button>
     </div>
     <Footer/>
  </div> 


   
  )
}

