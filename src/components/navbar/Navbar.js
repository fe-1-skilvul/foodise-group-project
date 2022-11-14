import React from 'react';
import {
  Button,
  Container,
  Dropdown,
  Form,
  Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Appbar = () => {
  return (
    <Navbar
      style={{
        backgroundColor: '#fff',
      }}
      expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to={'/'}>
            <img
              src="/images/foodise-logo.png"
              alt=""
              width={180}
              height={70}
            />
          </Link>
        </Navbar.Brand>
        <Form className="d-none d-md-flex rounded-pill">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 rounded-pill"
            aria-label="Search"
          />
          <Button
            style={{
              backgroundColor: '#3BACB6',
              border: 'none',
            }}
            className="rounded-pill">
            <img src="/icons/search-solid.svg" alt="" />
          </Button>
        </Form>
        <div className="container-nav">
          <div className="box-nav d-none d-md-flex">
            <img
              src="/icons/bowl-food-solid.svg"
              alt=""
              width={20}
              height={24}
            />
            <img
              src="/icons/bell-solid.svg"
              alt=""
              width={20}
              height={24}
            />
          </div>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="light"
              className="rounded-pill border border-gray text-success avatar-menu">
              <img src="/icons/user-solid.svg" alt="" />
              <img src="/icons/bars-solid.svg" alt="" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item active>Foods</Dropdown.Item>
              <Dropdown.Item>Favourite</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <Link
                  to={'/signup'}
                  className="text-decoration-none text-success ">
                  Log in{' '}
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={'/signup'}
                  className="text-decoration-none text-success ">
                  Sign up{' '}
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default Appbar;
