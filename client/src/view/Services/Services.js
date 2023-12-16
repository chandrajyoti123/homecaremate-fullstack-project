import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import axios from "axios"
import './Services.css'
import JobCard from '../../components/JobCard/JobCard'
import Footer from '../../components/Footer/Footer'
import left from './left-arrow.png'
import right from './right-arrow.png'



export default function Services() {
  const [services, setServices] = useState([])
  const loadServiceApi = async () => {
    const response = await axios.get('/api/services')

    setServices(response?.data?.data)

  }
  useEffect(() => {
    loadServiceApi();
    loadjobdata()

  }, [])

  // -------------job section-----------
  const [jobs, setJobs] = useState([])

  const loadjobdata = async () => {
    const response = await axios.get('/api/jobs')
    setJobs(response?.data?.data)
  }

  const handleScroll = (event) => {
    const scroll = document.getElementById('flex-scroll1');
    scroll.scrollLeft += event.deltaY;
  }

  return (
    <div>
      <Navbar />
      <div className='main-container'>
      <div className='heading'>
        See Our Services
        </div>
        <div className='services-section'>
          {
            services.map((service, i) => {
              const { service_name, service_img, service_info, _id } = service
              return <ServiceCard service_name={service_name} service_img={service_img} service_info={service_info} _id={_id} />

            })
          }
        </div>
        <div className='heading'>
          recently joined helper
        </div>

      
     

        
        <div>

         

        </div>
      </div>

      <div className="helpers-container">
        <div className="review-container1">
          <img src={left} className="img left-arrow" onClick={() => {
            handleScroll({ deltaY: -500 });

          }} />

        </div>
        <div className="review-container2" id="flex-scroll1">
          <div className="display-flex">
          {
            jobs.map((job, i) => {
              const { first_name, last_name, phoneno, email, image, address, adharno, gender, age, jobcategory, shift } = job
              return <JobCard img={image} firstname={first_name} lastname={last_name} jobcategory={jobcategory} shift={shift} phone_no={phoneno} adhar_no={adharno} address={address} email={email} age={age} gender={gender} />
            })
          }
          </div>
        </div>
        <div className="review-container3">
          <img src={right} className="img right-arrow" onClick={() => {
            handleScroll({ deltaY: 500 });

          }} />

        </div>
      </div>

  
     
     
      <Footer/>
    </div>
  )
}
