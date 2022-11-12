import React from 'react';
import PropTypes from 'prop-types';

const HomeLayout = ({ children }) => {
  return <div className="container">{children}</div>;
};
HomeLayout.propTypes = {
  children: PropTypes.element,
};
export default HomeLayout;
