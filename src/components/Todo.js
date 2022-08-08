import React from 'react';
import Input from './Input';
import List from './List';

const Todo = () => {
  return (
    <section className='todo-section'>
      <Input />
      <List />
    </section>
  );
};

export default Todo;
