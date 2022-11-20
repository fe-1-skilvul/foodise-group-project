import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { filterCtx } from '../../context/FilterCtx';

import Icon from '../atoms/Icon';

const Search = () => {
  const { setQuery } = useContext(filterCtx);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    return setQuery(search);
  };
  return (
    <Form
      className=" rounded-pill d-flex flex-row"
      onSubmit={(e) => handleSearch(e)}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2 rounded-pill"
        aria-label="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        type="submit"
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
