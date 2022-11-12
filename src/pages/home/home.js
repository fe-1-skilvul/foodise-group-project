import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { todoContext } from '../../app/TodoCtx';
import HomeContent from './home.content';
import './home.css';
import FormEdit from './home.edit';
import FormTodo from './home.form';
import HomeLayout from './home.layout';

const Home = () => {
  const { edit, todoEdit } = useContext(todoContext);

  return (
    <HomeLayout>
      <div className="box">
        <h1>What's The Plan for Today</h1>
        {edit ? <FormEdit todoProps={todoEdit} /> : <FormTodo />}

        <HomeContent />
      </div>
    </HomeLayout>
  );
};

export default Home;
