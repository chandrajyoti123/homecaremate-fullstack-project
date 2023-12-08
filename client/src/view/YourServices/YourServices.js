import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import YourServiceCard from '../../components/YourServiceCard/YourServiceCard'
import './YourServices.css'
import close from './close.png'
import star from './star.png'
import stared from './stared.png'
import Footer from '../../components/Footer/Footer'

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
        loadUserImage()
    }, [])



    const loadservicesorder = async () => {
        const response = await axios.get('/api/serviceorders')
        if (response?.data?.data) {
            setOrders(response?.data?.data)
            //   console.log(response?.data?.data)
        }
    }
    //  -------model----------

    const [modelnone, setModelnone] = useState('displaynone')
    const [ismodel, setIsmodel] = useState('')
    const [modelwrapper, setModelwrapper] = useState('')
    const open_model = () => {

        setModelnone('')
        setModelwrapper('model-wrapper')
        document.body.style.overflowY = "hidden"

    }

   
    const loadmodel = () => {
        const response = JSON.parse(localStorage.getItem('model'))
        setIsmodel(response)
    }
    useEffect(() => {
        loadmodel()
    }, [modelnone])

    const nothing = () => {

    }
// -------------------inside model-------------

const [message,setMessage]=useState('')

const [starcounts,setStarcounts]=useState(0)
 const [starimg1,setStarimg1]=useState(star)
 const [isstar1,setIsstar1]=useState(false)
 const changestar1=()=>{
    isstar1==false?setStarimg1(stared):setStarimg1(star)
    isstar1==false?setIsstar1(true):setIsstar1(false)
    if(starimg1==stared){
    setStarcounts(starcounts-1)
    }
    else{
        setStarcounts(starcounts+1)
    }
 }

 const [starimg2,setStarimg2]=useState(star)
 const [isstar2,setIsstar2]=useState(false)


 const changestar2=()=>{
    isstar2==false?setStarimg2(stared):setStarimg2(star)
    isstar2==false?setIsstar2(true):setIsstar2(false)
    if(starimg2==stared){
        setStarcounts(starcounts-1)
    }
    else{
        setStarcounts(starcounts+1)
    }

 }

 const [starimg3,setStarimg3]=useState(star)
 const [isstar3,setIsstar3]=useState(false)
 const changestar3=()=>{
    isstar3==false?setStarimg3(stared):setStarimg3(star)
    isstar3==false?setIsstar3(true):setIsstar3(false)
    if(starimg3==stared){
        setStarcounts(starcounts-1)
    }
    else{
        setStarcounts(starcounts+1)
    }
 }

 const [starimg4,setStarimg4]=useState(star)
 const [isstar4,setIsstar4]=useState(false)
 const changestar4=()=>{
    isstar4==false?setStarimg4(stared):setStarimg4(star)
    isstar4==false?setIsstar4(true):setIsstar4(false)
    if(starimg4==stared){
        setStarcounts(starcounts-1)
    }
    else{
        setStarcounts(starcounts+1)
    }
 }

 const [starimg5,setStarimg5]=useState(star)
 const [isstar5,setIsstar5]=useState(false)
 const changestar5=()=>{
    isstar5==false?setStarimg5(stared):setStarimg5(star)
    isstar5==false?setIsstar5(true):setIsstar5(false)
    if(starimg5==stared){
        setStarcounts(starcounts-1)
    }
    else{
        setStarcounts(starcounts+1)
    }
 }
  

 const [userimg,setUserimg]=useState('')
   
 const loadUserImage=()=>{
    const response = JSON.parse(localStorage.getItem('userimg'))
    setUserimg(response)

 }

  
 const closed_model = async() => {

   try{
    const response= await axios.post('/api/reviews',{
        user:user_id,
        image:userimg,
         message:message,
           star:starcounts
       })
   }
   catch(err){
    console.log(err.message)
   }



     setModelnone("displaynone")
     localStorage.setItem("model", JSON.stringify("closed"))
     setModelwrapper('')
      document.body.style.overflowY = "scroll"
 }
//  console.log(userimg)
console.log(user_id)


    return (
        <div className='overflow-hidden'>

            <div onMouseMove={ismodel ? nothing : open_model}>
                <Navbar />
                <div className='your-servicec-con'>

                    {
                        orders.map((order, i) => {
                            const { country, state, city, pincode, charges, userid, serviceid, shift } = order
                            if (userid._id == user_id) {
                                return <YourServiceCard country={country} state={state} city={city} charges={charges} pincode={pincode} service_img={serviceid.service_img} service_name={serviceid.service_name} shift={shift} />

                            }


                        })
                    }
                </div>
                <div className={modelwrapper}>

                </div>

            </div>

            <div className={`model-window ${modelnone} `}>
                
                <div className='experience'>How was your experience</div>
                <div className='rate-us-con'>
                <div className='rate-us'>Rate Us</div>
                <div className='star-container'>
                <img src={starimg1} className='star-img' onClick={changestar1}/>
                <img src={starimg2} className='star-img' onClick={changestar2} />
                <img src={starimg3} className='star-img' onClick={changestar3} />
                <img src={starimg4} className='star-img' onClick={changestar4} />
                <img src={starimg5} className='star-img' onClick={changestar5} />
                </div>
                </div>
{/* <div className='input-group'>
                <label for="message" className='input-label'> Review of W3Schools:</label>
                <textarea id="message"  rows="3" cols="50" className='review-inpute-feild'>

            </textarea>

</div> */}      <div className='rate-us-con'>
                <div className='rate-us'>Write Message</div>
                <input type='text' placeholder='write here' className='review-input' value={message} onChange={(e)=>{
                    setMessage(e.target.value)
                }}/>
                </div>
  {/* <img className='cross-img' src={close}
                 onClick={closed_model}
                 /> */}
                <button type='button' className='btn review-btn' onClick={closed_model}>Done</button>
              

            </div>
    <Footer/>
        </div>
    )
}
