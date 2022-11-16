import React from 'react'
import Button from 'react-bootstrap/Button';
import {btnLanding} from '../../config/'
import './hero.css'

function Hero() {
  return (
    <div>
        <div className='hero mb-5'>
          <div className='cardHero card'>
            <h1>Your Food</h1>
            <h1>Your choice</h1>
            <p> Kami berdedikasi untuk membantu kamu dalam memilih makanan terbaik dengan dampak positif terbaik</p>
          </div>
          <img className='hero-img' src="/images/Hero.png" alt="" />
        </div>
        <div className='d-flex justify-content-around'>
        {btnLanding.map((btn, index) => (
            <Button key={`btnLanding-${index}`} variant='outline-primary' className='hero mx-1'>
              <div  className='d-flex align-items-center '>
                <p className='tx-primary my-auto'>{btn.text1}</p>
                <p className='mx-2 my-auto'>{btn.text2}</p>
                <img src={btn.icon} alt=""/>
              </div>
            </Button>
                ))}
        </div>
    </div>
  )
}

export default Hero