import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { categories } from '../../Services/category';
import Icon from '../atoms/Icon';

const CategoryBar = () => {
  return (
    <Dropdown className="d-block d-md-none">
      <Dropdown.Toggle
        id="dropdown-button-dark-example1"
        variant="none"
        className=" border border-gray"
        style={{
          color: '#000',
          fontSize: '18px',
        }}>
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {categories.map((item, i) => {
          return (
            <Dropdown.Item
              key={i}
              className="d-flex justify-content-between">
              {item.name}
              <Icon image={item.icon} alt="z" />
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoryBar;
