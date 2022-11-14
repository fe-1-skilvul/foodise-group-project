import React from 'react';
import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import './Navbar.css';

const Appbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/images/foodise-logo.png"
            alt=""
            width={150}
            height={60}
          />
        </Navbar.Brand>
        <Form className="d-none d-md-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="light"
            className="rounded-pill border border-gray text-success avatar-menu">
            <img src="/icons/user-solid.svg" alt="" />
            <img src="/icons/bars-solid.svg" alt="" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" active>
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Another action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Something else
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">
              Separated link
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Appbar;
