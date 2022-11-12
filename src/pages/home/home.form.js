import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTodo } from './TodoSlice';

const FormTodo = () => {
  const [todo, setTodo] = useState('');

  const dispatch = useDispatch();

  const handleSavePostTodo = () => {
    console.log(todo);
    dispatch(postTodo(todo));
    setTodo('');
  };
  return (
    <form>
      <input
        type="text"
        placeholder="type here.."
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button
        type="button"
        className="add"
        onClick={() => handleSavePostTodo()}>
        Add
      </button>
    </form>
  );
};

export default FormTodo;
