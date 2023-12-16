import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import star from "./star.png";
import stared from "./stared.png";
import "./Pricing.css";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import Footer from "../../components/Footer/Footer";
import left from './left-arrow.png'
import right from './right-arrow.png'
import plus from './add.png'
import minus from './minus.png'
export default function Pricing() {
  const [reviews, SetReviews] = useState([]);

  const loadReviewApi = async () => {
    const response = await axios.get("/api/reviews");
    if (response?.data?.data) {
      SetReviews(response?.data?.data);
      // console.log(response?.data?.data?.createdAt)
    }
  };
  useEffect(() => {
    loadReviewApi();
  }, []);

  const handleScroll = (event) => {
    const scroll = document.getElementById('flex-scroll');
    scroll.scrollLeft += event.deltaY;
  }


  const [pricehandler, setPricehandler] = useState('displaynone')
  const [priceicon, setpriceicon] = useState(minus)
  const [istoggle, setIstoggle] = useState(false)
  const showprice = () => {
    if (istoggle == false) {
      setPricehandler('display-block')
      setpriceicon(plus)
    } else {
      setPricehandler('displaynone')
      setpriceicon(minus)
    }
    setIstoggle(istoggle == false ? true : false)

  }

  const [pricehandler1, setPricehandler1] = useState('displaynone')
  const [priceicon1, setpriceicon1] = useState(minus)
  const [istoggle1, setIstoggle1] = useState(false)
  const showprice1 = () => {
    if (istoggle1 == false) {
      setPricehandler1('display-block')
      setpriceicon1(plus)
    } else {
      setPricehandler1('displaynone')
      setpriceicon1(minus)
    }
    setIstoggle1(istoggle1 == false ? true : false)

  }

  const [pricehandler2, setPricehandler2] = useState('displaynone')
  const [priceicon2, setpriceicon2] = useState(minus)
  const [istoggle2, setIstoggle2] = useState(false)
  const showprice2 = () => {
    if (istoggle2 == false) {
      setPricehandler2('display-block')
      setpriceicon2(plus)
    } else {
      setPricehandler2('displaynone')
      setpriceicon2(minus)
    }
    setIstoggle2(istoggle2 == false ? true : false)

  }

  const [pricehandler3, setPricehandler3] = useState('displaynone')
  const [priceicon3, setpriceicon3] = useState(minus)
  const [istoggle3, setIstoggle3] = useState(false)
  const showprice3 = () => {
    if (istoggle3 == false) {
      setPricehandler3('display-block')
      setpriceicon3(plus)
    } else {
      setPricehandler3('displaynone')
      setpriceicon3(minus)
    }
    setIstoggle3(istoggle3 == false ? true : false)

  }


  const [pricehandler4, setPricehandler4] = useState('displaynone')
  const [priceicon4, setpriceicon4] = useState(minus)
  const [istoggle4, setIstoggle4] = useState(false)
  const showprice4 = () => {
    if (istoggle4 == false) {
      setPricehandler4('display-block')
      setpriceicon4(plus)
    } else {
      setPricehandler4('displaynone')
      setpriceicon4(minus)
    }
    setIstoggle4(istoggle4 == false ? true : false)

  }


  const [pricehandler5, setPricehandler5] = useState('displaynone')
  const [priceicon5, setpriceicon5] = useState(minus)
  const [istoggle5, setIstoggle5] = useState(false)
  const [pricename,setPricename]=useState('')
  const showprice5 = () => {
    if (istoggle5 == false) {
      setPricehandler5('display-block')
      setpriceicon5(plus)
      setPricename('charges-color')
    } else {
      setPricehandler5('displaynone')
      setpriceicon5(minus)
      setPricename('')
    }
    setIstoggle5(istoggle5 == false ? true : false)

  }
  return (
    <div>
      <Navbar />

      <div className="main-container">

        <div className="heading">our Charges</div>

        <div className="pricing-section">
          <div className="pricing-section-child">
            <div className={`services-name  ${pricename}`}>
              <span className="name-of-services">
                home maid
              </span>
              <span className="services-icon">
                <img src={priceicon} className="minus" onClick={showprice} />

              </span>

            </div>
            <div className={`services-charges ${pricehandler}`}>

              <div className="charges-container">

                <span className="name-of-shift">
                  day shift
                </span>

                <span className="charges-onward">
                  8000 onward

                </span>
              </div>
              <div className="charges-container">

                <span className="name-of-shift">
                  night shift
                </span>

                <span className="charges-onward">
                  9000 onward

                </span>
              </div>
              <div className="charges-container">

                <span className="name-of-shift">
                  live in
                </span>

                <span className="charges-onward">
                  15000 onward

                </span>
              </div>


            </div>
          </div>
          <div className="pricing-section-child">
            <div className="services-name">
              <span className="name-of-services">
                home cook
              </span>
              <span className="services-icon">
                <img src={priceicon1} className="minus" onClick={showprice1} />

              </span>

            </div>
            <div className={`services-charges ${pricehandler1}`}>

              <div className="charges-container">

                <span className="name-of-shift">
                  day shift
                </span>

                <span className="charges-onward">
                  10000 onward

                </span>
              </div>
              <div className="charges-container">

                <span className="name-of-shift">
                  night shift
                </span>

                <span className="charges-onward">
                  12000 onward

                </span>
              </div>
              <div className="charges-container">

                <span className="name-of-shift">
                  live in
                </span>

                <span className="charges-onward">
                  20000 onward

                </span>
              </div>

            </div>
          </div>
          <div className="pricing-section-child">
            <div className="services-name">
              <span className="name-of-services">
                baby sitter
              </span>
              <span className="services-icon">
                <img src={priceicon2} className="minus" onClick={showprice2} />

              </span>

            </div>
            <div className={`services-charges ${pricehandler2}`}>

              <div className="charges-container">

                <span className="name-of-shift">
                  day shift
                </span>

                <span className="charges-onward">
                  6000 onward

                </span>
              </div>
              <div className="charges-container">

                <span className="name-of-shift">
                  night shift
                </span>

                <span className="charges-onward">
                  8000 onward

                </span>
              </div>
              <div className="charges-container">

                <span className="name-of-shift">
                  live in
                </span>

                <span className="charges-onward">
                  15000 onward

                </span>
              </div>

            </div>
          </div>
          <div className="pricing-section-child">
            <div className="services-name">
              <span className="name-of-services">
                home nurse
              </span>

              <span className="services-icon">
                <img src={priceicon3} className="minus" onClick={showprice3} />

              </span>

            </div>
            <div className={`services-charges ${pricehandler3}`}>
              <div className="charges-container">

                <span className="name-of-shift">
                  day shift
                </span>

                <span className="charges-onward">
                  12000 onward

                </span>
              </div>
              <div className="charges-container">

                <span className="name-of-shift">
                  night shift
                </span>

                <span className="charges-onward">
                  13000 onward

                </span>
              </div>
              <div className="charges-container">

                <span className="name-of-shift">
                  live in
                </span>

                <span className="charges-onward">
                  22000 onward

                </span>
              </div>


            </div>
          </div>
          <div className="pricing-section-child">
            <div className="services-name">
              <span className="name-of-services">
                patient/elderly caretaker
              </span>
              <span className="services-icon">
                <img src={priceicon4} className="minus" onClick={showprice4} />

              </span>

            </div>
            <div className={`services-charges ${pricehandler4}`}>

              <div className="charges-container">

                <span className="name-of-shift">
                  day shift
                </span>

                <span className="charges-onward">
                  12000 onward

                </span>
              </div>
              <div className="charges-container">

                <span className="name-of-shift">
                  night shift
                </span>

                <span className="charges-onward">
                  14000 onward

                </span>
              </div>
              <div className="charges-container">

                <span className="name-of-shift">
                  live in
                </span>

                <span className="charges-onward">
                  24000 onward

                </span>
              </div>

            </div>
          </div>
          <div className="pricing-section-child">
            <div className="services-name">
              <span className="name-of-services">
                nanny/japa
              </span>
              <span className="services-icon">
                <img src={priceicon5} className="minus" onClick={showprice5} />

              </span>

            </div>
            <div className={`services-charges ${pricehandler5}`}>

              <div className="charges-container">

                <span className="name-of-shift">
                  day shift
                </span>

                <span className="charges-onward">
                  6000 onward

                </span>
              </div>
              <div className="charges-container">

                <span className="name-of-shift">
                  night shift
                </span>

                <span className="charges-onward">
                  7000 onward

                </span>
              </div>
              <div className="charges-container">

                <span className="name-of-shift">
                  live in
                </span>

                <span className="charges-onward">
                  14000 onward

                </span>
              </div>

            </div>
          </div>

        </div>
        <div className="heading">our customers reviews</div>

      </div>

      <div className="review-container">
        <div className="review-container1">
          <img src={left} className="img left-arrow" onClick={() => {
            handleScroll({ deltaY: -500 });

          }} />

        </div>
        <div className="review-container2" id="flex-scroll">
          <div className="display-flex">
            {reviews.map((review, i) => {
              const { message, image, star, user, createdAt } = review;
              return (
                <ReviewCard
                  message={message}
                  first_name={user.first_name}
                  last_name={user.last_name}
                  star={star}
                  user_img={image}
                  createdat={createdAt}
                />
              );
            })}
          </div>
        </div>
        <div className="review-container3">
          <img src={right} className="img right-arrow" onClick={() => {
            handleScroll({ deltaY: 500 });

          }} />

        </div>
      </div>




      <Footer />
    </div>
  );
}
