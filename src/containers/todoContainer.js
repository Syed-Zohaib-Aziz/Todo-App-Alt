import AltContainer from 'alt-container';
import Todo from '../components/Todo/todo';
import todoStore from '../stores/todoStore'
import React from 'react';

const TodoContainer = () => (
  <AltContainer store = {todoStore}
  >
    <Todo />
  </AltContainer>
);

export default TodoContainer;
