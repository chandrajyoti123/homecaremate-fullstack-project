import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useFetcher, useParams } from 'react-router-dom'
import countries from './tbl_country.json'
import states from './tbl_state.json'
import Cities from './tbl_city1.json'
import axios from "axios"
import './PlacedService.css'



export default function PlacedService() {
    const { _id } = useParams()
    const [country, setCountry] = useState('')
    const [countryid, setCountryid] = useState({})
    const [state, setState] = useState('')
    const [stateid, setStateid] = useState('')
    const [salarydata, setSalarydata] = useState([])
    const [shift, setShift] = useState('')
    const [fixedsal, setFixedsal] = useState('')
    const [city, setCity] = useState('')
    const [service, setService] = useState({})
    const [pincode,setPincode]=useState('')
    const [userid,setUserid]=useState('')
    console.log(userid)





    const loadServicesData = async () => {
        const response = await axios.get(`/api/services/${_id}`)
        if (response?.data?.data) {
            setService(response?.data?.data)
            setSalarydata(response?.data?.data?.salary_set)
        }
        else {
            alert(response?.data?.message)
        }
    }
  
    const loaduser=()=>{
        const response=JSON.parse(localStorage.getItem('loginuser'))
        setUserid(response?._id)
      
    }

    useEffect(() => {
        loadServicesData()
        loaduser()
    }, [])

    const countrycodefind = () => {
        countries.map((countryone, i) => {
            if (countryone.country_name == country)
                setCountryid(countryone.country_id)
        })
    }
    useEffect(() => {

        countrycodefind()
    }, [country])

    const statecodefind = () => {
        states.map((stateone) => {
            if (stateone.state_name == state) {
                setStateid(stateone.state_id)
            }
        })
    }
    useEffect(() => {
        statecodefind();
    }, [state])
   

    const charges=()=>{
        shift == "day shift" ? setFixedsal(salarydata[0]) : shift == "night shift" ? setFixedsal(salarydata[1]) : setFixedsal(salarydata[2])

    }
    useEffect(()=>{
        charges()
    },[shift])
    console.log(fixedsal)

    

    const placedservice=async()=>{
        const response=await axios.post('/api/sericeorders',{
            shift:shift, country:country, state:state, city:city, pincode:pincode, userid:userid , serviceid:_id, charges:fixedsal

        })
        if(response?.data?.data){
            alert("your services placed successfully")
            window.location.href='/services'

        }
        else{
           alert(response?.data?.message)
        }

    }

    return (
        <div>
            <Navbar />
            <div className='service-order-heading'>
                Discover Exceptional Care: Our Comprehensive Range of Services
            </div>

            <div className='services-container'>

                <div className='services-con-child1' >
                    <div className='service_name'>{service.service_name}</div>
                    <img src={service.service_img} className='img-services' />
                    <div className='service-info'>{service.detailed_info}</div>
                </div>

                <div className='services-con-child2'>
                    <div className='select-container' >
                        <label className='input-label'>Shift</label>
                        <select value={shift} onChange={(e) => {
                            setShift(e.target.value)
                        }} className='select-field'>
                            <option>day shift</option>
                            <option>night shift</option>
                            <option>live in</option>

                        </select>
                    </div>

                    <div className='input-group'>
                        <label htmlFor='salary' className='input-label'>Charges</label>
                        <input type='text' placeholder='At least 8 character' id='salary' className='input-field'  value={shift == "day shift" ? salarydata[0] : shift == "night shift" ? salarydata[1] : salarydata[2]} 
             disabled />
                    </div>
                    <div className='select-container' >
                        <label className='input-label'>Country</label>
                        <select value={country} onChange={(e) => {
                            setCountry(e.target.value)
                        }}
                            className='select-field' >
                            <option>Choose Country </option>
                            {
                                countries.map((countryone) => {
                                    return <option value={countryone.country_name}>{countryone.country_name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className='select-container' >
                        <label className='input-label'>State</label>
                        <select value={state} onChange={(e) => {
                            setState(e.target.value)
                        }}
                            className='select-field' >
                            <option>Choose State </option>
                            {
                                states.map((state) => {
                                    if (state.country_id == countryid) {
                                        return <option value={state.state_name}>{state.state_name}</option>
                                    }
                                })}
                        </select>
                    </div>


                    <div className='select-container' >
                        <label className='input-label'>State</label>
                        <select value={city} onChange={(e) => {
                            setCity(e.target.value)
                        }} className='select-field' >
                            <option>Choose City </option>
                            {Cities.map((cityone) => {
                                if (cityone.state_id == stateid) {
                                    return <option value={cityone.city_name}>{cityone.city_name}</option>
                                }
                            })
                            }
                        </select>
                    </div>

                    <div className='input-group'>
                        <label htmlFor='pincode' className='input-label'>Pincode</label>
                        <input type='text' placeholder='Ex,. 440008' id='pincode' className='input-field'
                            value={pincode} onChange={(e) => {
                                setPincode(e.target.value)
                            }} />
                    </div>

                    <button className='btn' type='button' onClick={placedservice}>Done</button>
                </div>
            </div>
            {/* <div>

                this is detailed services page

                <h1>{service.service_name}</h1>
                <img src={service.service_img} />
                <div>{service.detailed_info}</div>
                {
                    salarydata.map((data)=>{
                        return <h1>{data}</h1>

                    })
                }
            </div> */}
            {/* <select value={country} onChange={(e) => {
                setCountry(e.target.value)
            }} >

                {
                    countries.map((countryone) => {


                        return <option value={countryone.country_name}>{countryone.country_name}</option>
                    })
                }

            </select>

            <select value={state} onChange={(e) => {


                setState(e.target.value)
            }} >

                {
                    states.map((state) => {
                        if (state.country_id == countryid) {
                            return <option value={state.state_name}>{state.state_name}</option>

                        }
                        // else{
                        //     return <option value={state.state_name}>{state.state_name}</option>
                        // }

                    })
                }


            </select>

           <select>
            {
                Cities.map((cityone)=>{

                    if(cityone.state_id==stateid){
                        return <option value={cityone.city_name}>{cityone.city_name}</option>
                    }
                   
                })
            }
           </select> */}




        </div>
    )
















}
