import React from 'react';
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { btnLanding } from '../../config/';
import './hero.css';

function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="cardHero card border-0">
          <h2>Your Food</h2>
          <h2>Your Choice</h2>
          <p
            style={{
              fontSize: '18px',
              color: '#9e9e9e',
              fontWeight: '600',
            }}>
            {' '}
            Save Your Health with Your Food Choice
          </p>
        </div>
        <img className="img-fluid " src="/images/Hero.png" alt="" />
      </div>
      <Stack className="d-flex flex-wrap flex-md-row justify-content-around">
        {btnLanding.map((btn, index) => (
          <Button
            key={`btnLanding-${index}`}
            variant="outline-grey"
            className="hero mx-1">
            <div className="d-flex align-items-center ">
              <p
                className="tx-grey my-auto"
                style={{
                  fontWeight: '600',
                }}>
                {btn.text1}
              </p>
              <p
                className="mx-2 my-auto"
                style={{
                  color: '#3bacb6',
                  fontWeight: '600',
                }}>
                {btn.text2}
              </p>
              <img src={btn.icon} alt="" />
            </div>
          </Button>
        ))}
      </Stack>
    </div>
  );
}

export default Hero;
