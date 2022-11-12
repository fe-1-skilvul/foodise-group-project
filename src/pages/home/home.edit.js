import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { todoContext } from '../../app/TodoCtx';
import { editTodo } from './TodoSlice';

const FormEdit = ({ todoProps }) => {
  const [todo, setTodo] = useState('');
  const { setEdit } = useContext(todoContext);

  const dispatch = useDispatch();

  const handleSavePostTodo = () => {
    console.log(todo);
    dispatch(editTodo({ id: todoProps.id, content: todo }));
    setTodo('');
    setEdit(false);
  };
  console.log(todoProps);
  return (
    <form>
      <input
        type="text"
        placeholder={todoProps.content}
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button
        type="button"
        className="edit"
        onClick={() => handleSavePostTodo()}>
        edit
      </button>
    </form>
  );
};
FormEdit.propTypes = {
  todoProps: PropTypes.object,
};
export default FormEdit;
