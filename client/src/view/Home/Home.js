import React, { useState } from 'react';
import './Home.css';
import maid from './../Home/maid.png';
import {Card} from '../../components/Card/Card.js'
import {WorksCard} from '../../components/WorksCard/WorkCard.js'


export default function () {
  const [howItWorks, setHowItWorks] = useState(Card)
  const [whyUs, setWhyUs] = useState(WorksCard)

  return (
    <div className='home-main-div'>
      <div className='navbar'>
        <h2>HomePage</h2>
      </div>

      <div>
        <img src={maid} className='home-img' />
        <div>
          <h1 className='home-desc-1'>How It Works</h1>
          <div>
            {
              Card.map((Card, index) => {
                const { logo, name, description } = Card;
                return<div>
                  <Card key={index} img={logo}  name={name} description={ description} />
                </div>

              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
