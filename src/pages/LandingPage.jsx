import React from 'react'
import Hero from '../components/hero/Hero'
import CardFeatures from '../components/card/CardFeatures'
import CardFoods from '../components/card/CardFoods'
import Button from 'react-bootstrap/Button';


function LandingPage() {
  return (
    <div>
        <Hero />
        <div className='mt-5'>
          <h1>Our Features</h1>
          <div>
            <CardFeatures/>
          </div>
        </div>
        <div className='mt-5'>
          <h1>Our Foods</h1>
          <div>
            <CardFoods />
          </div>
          <Button variant="outline-primary" className='d-flex mx-auto my-5 px-4 justify-content-center'>More Foods</Button>
        </div>
    </div>
  )
}

export default LandingPage