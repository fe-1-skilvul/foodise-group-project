import { createContext, useState } from 'react';

const initialState = {
  query: '',
  category: 'main course',
};

export const filterCtx = createContext(initialState);

const FilterCtxProvider = ({ children }) => {
  const [query, setQuery] = useState(initialState.query);
  const [category, setCategory] = useState(initialState.category);
  return (
    <filterCtx.Provider
      value={{ query, setQuery, category, setCategory }}>
      {children}
    </filterCtx.Provider>
  );
};

export default FilterCtxProvider;
