import React from 'react';
import Hero from '../components/hero/Hero';
import CardFeatures from '../components/card/CardFeatures';

function LandingPage() {
  return (
    <div>
      <Hero />
      <div className="mt-5">
        <h1>Our Features</h1>
        <div>
          <CardFeatures />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
