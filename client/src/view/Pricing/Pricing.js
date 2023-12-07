import React, { useState,useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import star from './star.png'
import stared from './stared.png'
import ReviewCard from '../../components/ReviewCard/ReviewCard'
export default function Pricing() {
  const [reviews,SetReviews]=useState([])
  
  
  


   const loadReviewApi= async()=>{
    const response=await axios.get('/api/reviews')
    SetReviews(response?.data?.data)
    console.log(response?.data?.data)
                                 }
   useEffect(()=>{
    loadReviewApi();
   },[])
  
  return (
    <div>
      <Navbar/>
      {
        reviews.map((review,i)=>{
          const { message,image,star,user}=review
          return <ReviewCard message={message} first_name={user.first_name} last_name={user.last_name} star={star} user_img={image} />
          

           })
      }
    
    
   

   


      

        
        <div>
           
             { 
           
              }
             
          </div> 
    </div>
  )
}
