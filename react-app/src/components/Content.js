import React from 'react'
import TodoAddForm from './forms/TodoAddForm';
import TodoList from './TodoList';

export default function Content() {
  return (
    <div>
      <TodoAddForm/>
      <TodoList/>
    </div>
  )
}
