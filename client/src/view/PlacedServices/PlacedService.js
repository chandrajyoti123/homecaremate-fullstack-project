import React, { useEffect, useState } from 'react'
import { useFetcher, useParams } from 'react-router-dom'
import countries from './tbl_country.json'
import states from './tbl_state.json'
import Cities from './tbl_city1.json'
import axios from "axios"


export default function PlacedService() {
    const [country, setCountry] = useState('')
    const [countryid, setCountryid] = useState({})
    const [state, setState] = useState('')
    const [stateid, setStateid] = useState('')

    const [city, setCity] = useState('')

    const { _id } = useParams()

    const [service, setService] = useState({})

    const loadServicesData = async () => {
        const response = await axios.get(`/api/services/${_id}`)
        //  console.log(response?.data?.data?.service_name)

        if (response?.data?.data) {
            setService(response?.data?.data)
        }
        else {
            alert(response?.data?.message)
        }

    }

    useEffect(() => {
        loadServicesData()


    }, [])
    console.log(country)


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
    console.log(stateid)



    // --------country-------

    //    const loadcitydata=()=>{
    //     cities.map((city)=>{
    //         setCity(city)

    //     })
    //    }

    //    console.log(city)



    return (

        <>
            <div>

                this is detailed services page

                <h1>{service.service_name}</h1>
                <img src={service.service_img} />
            </div>
            <select value={country} onChange={(e) => {
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
           </select>




        </>
    )
}
