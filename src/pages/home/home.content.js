import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './home.todos';
import { completeTodo, removeTodo } from './TodoSlice';

const HomeContent = () => {
  const todos = useSelector((state) => state.todolist);
  const [display, setDisplay] = useState('all');
  const [isUpdate, setIsUpdate] = useState(false);

  const handleDisplayTodo = (e) => {
    let value = e.target.value;
    setDisplay(value);
    setIsUpdate(isUpdate);
  };
  const displayValue = ['all', 'active', 'completed'];
  const styledActive = {
    background: '#1555f6',
    color: '#fff',
  };
  return (
    <div>
      <div className="buttons-display">
        {displayValue.map((value, i) => {
          return (
            <button
              key={i}
              style={display == value ? styledActive : null}
              type="button"
              onClick={(e) => handleDisplayTodo(e)}
              value={value}>
              {value}
            </button>
          );
        })}
      </div>
      <div>
        {todos.map((todo) => {
          if (display === 'all') {
            return <TodoItem key={todo.id} todo={todo} />;
          }
          if (todo.status === display) {
            return <TodoItem key={todo.id} todo={todo} />;
          }
        })}
      </div>
    </div>
  );
};

export default HomeContent;
