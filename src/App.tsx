import React , { useState } from 'react';
import { Todo } from './todo.modal'

import NewTodo from './NewTodo'
import TodoList from './ToDoList'

const App: React.FC = () => {
  const [todos,setTodo] = useState<Todo[]>([]);
       const todoAddHandler = (text:string) => {
         setTodo( prevTodos => [...prevTodos,
          {id:Math.random().toString(), text: text}] )
       }

  const todoDeleteHandler = (todoId:string) => {
    setTodo(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    } )
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList item={todos} onDeleteTodo={todoDeleteHandler}/> 
    </div>
  );
}

export default App; 
