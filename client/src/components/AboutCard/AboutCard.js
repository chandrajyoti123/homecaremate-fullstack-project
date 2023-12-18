import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 


function AboutCard({name , hedline, description, image, github, linkedin, peerlist}) {
  return (
    <div className='job-card icon-container'>
    <div className='img-container text-center'>
    <img className='img-card text-center' src={image} />
    </div>
    <h2> {name} </h2>
    <p className='hed-text'> {hedline} </p> <br/>
    <p> {description}</p>
    <p> {}</p>

    <p className='p-10'>< hr /></p>
    <div className='icon-container'>
    <a href={github} target='blank' className='prof-account cole-bl' > <FontAwesomeIcon icon={faGithub} /> </a>
    <a href={linkedin} target='blank' className='prof-account' > <FontAwesomeIcon icon={faLinkedin} /> </a>
    
   
    
   
    </div>

  </div>
  )
}

export default AboutCard
