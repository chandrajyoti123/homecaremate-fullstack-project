import React, { useState,useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import star from './star.png'
import stared from './stared.png'
import ReviewCard from '../../components/ReviewCard/ReviewCard'
import Footer from '../../components/Footer/Footer'
export default function Pricing() {
  const [reviews,SetReviews]=useState([])
  
  
  
  


   const loadReviewApi= async()=>{
    const response=await axios.get('/api/reviews')
   if(response?.data?.data){
    SetReviews(response?.data?.data)
    // console.log(response?.data?.data?.createdAt)
   }
                                 }
   useEffect(()=>{
    loadReviewApi();
   },[])
  
  return (
    <div>
      <Navbar/>
      <div className='main-container'>

      <div className='heading'>
              our customers reviews
            </div>

      
      {
        reviews.map((review,i)=>{
          const { message,image,star,user,createdAt}=review
          return <ReviewCard message={message} first_name={user.first_name} last_name={user.last_name} star={star} user_img={image} createdat={createdAt} />
          

           })
      }

</div>
<Footer/>
    
 </div>
  )
}
