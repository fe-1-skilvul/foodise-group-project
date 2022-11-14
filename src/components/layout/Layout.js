import React from 'react';
import Appbar from '../navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Appbar />
      <div className="container">
        <div className="row justify-content-md-center">
          {/* <div class="col col-lg-2">1 of 3</div>
        <div class="col-md-auto">Variable width content</div>
        <div class="col col-lg-2">3 of 3</div> */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
