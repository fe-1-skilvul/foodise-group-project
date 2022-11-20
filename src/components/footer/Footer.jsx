import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <Container
      className="d-flex flex-column flex-md-row bg-footer align-items-center pt-5 w-100 fluid "
      style={{
        marginTop: '50px',
      }}>
      <div className="col-3 my-auto">
        <img src="/images/foodise-logo.png" alt="" />
      </div>
      <Stack className="mt-2">
        <h6>Site Map</h6>
        <div className="d-flex flex-column align-items-start p-2 gap-1">
          <Link to={'/home'}>Home</Link>
          <Link to={'/booked'}>Favourite</Link>
          <Link to={'/signup'}>Signup</Link>
        </div>
      </Stack>
      <Stack>
        <div className="d-flex flex-column align-items-start p-2 gap-1">
          <h6>Credit:</h6>
          <p>
            API by{' '}
            <a href="https://spoonacular.com/food-api">Spoonacular</a>
          </p>
          <p>Icon by FontAwesome</p>
          <p>Our Partner Danone </p>
          <p>Special Credit for Skilvul</p>
        </div>
      </Stack>
      <div className="pt-4 pb-2">
        <p className="text-center">
          Copyright © Team FEBE 2 - Danone #Tech4Impact 2022 | All
          Right Reserved
        </p>
      </div>
    </Container>
  );
}

export default Footer;
