import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Login from '../../pages/Login';
import Appbar from '../navbar/Navbar';
import Search from '../search/Search';

const Layout = ({ children }) => {
  return (
    <>
      <Appbar />

      <Container>
        <div className="d-block d-md-none">
          <Search />
        </div>
        {children}
      </Container>
      <Login />
    </>
  );
};

export default Layout;