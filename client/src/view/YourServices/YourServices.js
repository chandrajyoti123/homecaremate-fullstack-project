import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'

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
        }
    }


    return (
        <div>
           {
            orders.map((order,i)=>{
                const {country,state,city,pincode, charges, userid,serviceid}=order
                if(userid==user_id){
                    return (<> 
                        <div>{country}</div>
                        <div>{pincode}</div>
                        
                        <div>{state}</div>
                        <div>{city}</div>
                        <div>{charges}</div>
                        
                        </>)

                }
                

            })
           }
        </div>
    )
}
