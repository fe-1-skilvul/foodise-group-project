import React from 'react';

const Icon = (props) => {
  const { image, alt } = props;
  return <img src={image} alt={alt} width={20} height={24} />;
};

export default Icon;
