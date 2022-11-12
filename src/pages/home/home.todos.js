import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { todoContext } from '../../app/TodoCtx';
import PropTypes from 'prop-types';
import { completeTodo, removeTodo } from './TodoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { setEdit, setTodoEdit } = useContext(todoContext);
  const styledTodo = {
    active: {
      color: '#000',
    },
    completed: {
      color: '#bfbfbf',
    },
    visible: {
      visibility: 'hidden',
    },
  };

  const handleEdit = () => {
    setEdit(true);
    setTodoEdit(todo);
  };
  return (
    <>
      <div key={todo.id} className="todo-item">
        <button
          type="button"
          style={
            todo.status === 'completed' ? styledTodo.visible : null
          }
          className="cek"
          onClick={() => dispatch(completeTodo({ id: todo.id }))}>
          <img
            src="/icons/check-solid.svg"
            alt="icon-hapus"
            width={20}
          />
        </button>
        <p
          style={
            todo.status === 'active'
              ? styledTodo.active
              : styledTodo.completed
          }>
          {todo.content}
        </p>
        <button
          type="button"
          className="change"
          onClick={() => handleEdit()}>
          <img src="/icons/edit.svg" alt="icon-edit" width={20} />
        </button>
        <button
          type="button"
          className="delete"
          onClick={() => dispatch(removeTodo({ id: todo.id }))}>
          <img src="/icons/trash.svg" alt="icon-hapus" width={20} />
        </button>
      </div>
    </>
  );
};
TodoItem.propTypes = {
  todo: PropTypes.object,
};
export default TodoItem;
