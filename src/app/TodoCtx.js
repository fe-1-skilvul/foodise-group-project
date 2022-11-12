import { createContext, useState } from 'react';

const initialValue = {
  isEdit: false,
};
export const todoContext = createContext(initialValue);

export default function TodoProvider({ children }) {
  const [edit, setEdit] = useState(initialValue.isEdit);
  const [todoEdit, setTodoEdit] = useState({});
  return (
    <todoContext.Provider
      value={{ edit, setEdit, todoEdit, setTodoEdit }}>
      {children}
    </todoContext.Provider>
  );
}
