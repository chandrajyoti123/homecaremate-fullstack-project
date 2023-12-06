import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import YourServiceCard from '../../components/YourServiceCard/YourServiceCard'
import './YourServices.css'
import close from './close.png'

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
//  -------model----------

const [modelnone,setModelnone]=useState('displaynone')
const [ismodel,setIsmodel]=useState('')
const [modelwrapper,setModelwrapper]=useState('')
const open_model=()=>{
 
    setModelnone('')
    setModelwrapper('model-wrapper')
    document.body.style.overflowY="hidden"

}

const closed_model=()=>{
    setModelnone("displaynone")
    localStorage.setItem("model",JSON.stringify("closed"))
    setModelwrapper('')
    document.body.style.overflowY="scroll"
}
const loadmodel=()=>{
    const response = JSON.parse(localStorage.getItem('model'))
    setIsmodel(response)
}
useEffect(()=>{
    loadmodel()
},[modelnone])
 
const nothing=()=>{
    
}

    return (
        <div className='overflow-hidden'>

        <div onMouseMove={ismodel?nothing:open_model}>
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
        <div className={modelwrapper}>

</div>

        </div>

<div className={`model-window ${modelnone} `}>
            <img className='cross-img' src={close} onClick={closed_model}/>

        </div>
        
        </div>
    )
}
