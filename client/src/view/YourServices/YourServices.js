import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import YourServiceCard from '../../components/YourServiceCard/YourServiceCard'

export default function YourServices() {
    const [user_id, setUser_id] = useState('')
    const [orders, setOrders] = useState([])
   

    const loadloginuser = () => {
        const response = JSON.parse(localStorage.getItem('loginuser'))
        setUser_id(response._id)
    }
    useEffect(() => {
        loadloginuser()
        loadservicesorder()
    }, [])



    const loadservicesorder = async () => {
        const response = await axios.get('/api/serviceorders')
        if (response?.data?.data) {
          setOrders(response?.data?.data)
        //   console.log(response?.data?.data)
        }
    }


    return (
        <>
        <Navbar/>
        <div>
         
           {
            orders.map((order,i)=>{
                const {country,state,city,pincode, charges, userid,serviceid,shift}=order
                if(userid._id==user_id){
                    return <YourServiceCard country={country} state={state} city={city} charges={charges} pincode={pincode} service_img={serviceid.service_img} service_name={serviceid.service_name} shift={shift}/>

                }
                

            })
           }
        </div>
        
        </>
    )
}
