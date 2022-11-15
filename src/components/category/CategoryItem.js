import React from 'react';
import Icon from '../atoms/Icon';

const CategoryItem = (props) => {
  const { name, icon } = props;
  return (
    <div
      className="d-flex align-items-center flex-column"
      style={{
        width: '100px',
      }}>
      <Icon image={`${icon}`} alt="spoon" />
      <p className="text-item">{name}</p>
    </div>
  );
};

export default CategoryItem;
