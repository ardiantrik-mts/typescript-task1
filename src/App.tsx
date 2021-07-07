import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './TodoForm';

const initTodos: Todo[] = [
  // {
  //   text: 'Walk the dog',
  //   complete: false,
  // },
  // {
  //   text: 'Write app',
  //   complete: true,
  // },
];

function App() {
  const [todos, setTodos] = useState(initTodos);
  // const [targetTodos, setTargetTodos] = useState(initTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo;
    })
    setTodos(newTodos)
  }

  const completeAllTodo = () => {
    const newTodos = todos.map(todo => {
      if (true) {
        return {
          ...todo,
          complete: true,
        }
      }
      return todo;
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { 
      id: Math.floor(Math.random() * 1000) + 1,
      text,
      complete: false };
    // console.log(newTodo);
    
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id: number, text: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text: text,
        }
      }
      return todo;
    })
    setTodos(newTodos)


  };

  const deleteTodo = (selectedTodo: Todo) => {
    const newTodos = todos.filter(todo => todo.id !== selectedTodo.id)
    setTodos(newTodos)
  }

  return (
    <div>
      <h1>TO DO LIST</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
      <AddTodoForm addTodo={addTodo}/>
      {/* <EditTodoForm editTodo={editTodo} /> */}
      <button onClick={completeAllTodo}>Mark All as Completed</button>
    </div>
  );
}

export default App;
