import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Icon from '../atoms/Icon';

const Search = () => {
  return (
    <Form className=" rounded-pill d-flex flex-row">
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
        <Icon image="/icons/search-solid.svg" alt="search" />
      </Button>
    </Form>
  );
};

export default Search;
