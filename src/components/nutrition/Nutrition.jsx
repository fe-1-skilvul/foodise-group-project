import React from 'react';

const Nutrition = ({ icon, name, value }) => {
  return (
    <div className="shadow-sm d-flex flex-row justify-content-between align-items-center p-3">
      <div className="d-flex flex-row align-items-center gap-3">
        <img src={icon} alt={name} />
        <p
          style={{
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '30px',
            color: '#000',
            margin: 0,
          }}>
          {name}
        </p>
      </div>
      <p
        style={{
          margin: 0,
          fontWeight: '600',
          fontSize: '18px',
          lineHeight: '30px',
          color: '#9e9e9e',
        }}>
        {value}
      </p>
    </div>
  );
};

export default Nutrition;
