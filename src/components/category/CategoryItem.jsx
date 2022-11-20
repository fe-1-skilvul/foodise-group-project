import React, { useContext } from 'react';
import { filterCtx } from '../../context/FilterCtx';
import Icon from '../atoms/Icon';

const CategoryItem = (props) => {
  const { category, setCategory } = useContext(filterCtx);
  const { name, icon, iconB } = props;
  const active = {
    color: '#000',
    transition: '1.3s',
  };

  return (
    <div
      className="d-flex align-items-center flex-column"
      style={{
        width: '100px',
        cursor: 'pointer',
      }}
      onClick={(e) => setCategory(name)}>
      <Icon
        image={category === name ? `${iconB}` : `${icon}`}
        alt={name}
      />
      <p
        className="text-item"
        style={category === name ? active : null}>
        {name}
      </p>
    </div>
  );
};

export default CategoryItem;
