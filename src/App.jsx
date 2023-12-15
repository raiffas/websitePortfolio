import React from "react";
import Routes from "./Routes";

import { useState } from "react"
import { NewTodoForm } from "NewTodoForm";
import { TodoList } from "TodoList";
//functions start with a capital letter and are essentially components
export default function App() {
  return <Routes />;
  // const [todos, setTodos] = useState([])

  

  // function addTodo(title) {
  //   setTodos( currentTodos => {
  //         return [
  //           ...currentTodos, 
  //           { id: crypto.randomUUID(), title: title, completed: false},
  //         ]
  //       })
  // }

  // function deleteTodo(id) {
  //   setTodos(currentTodos => {
  //     return currentTodos.filter(todo => todo.id !== id)
  //   })
  // }

  // function toggleTodo(id, completed) {
  //   setTodos(currentTodos => {
  //     return currentTodos.map(todo => {
  //       if (todo.id === id) {
  //         return { ...todo, completed }
  //       }
  //     })
  //   })
  // }

  // // if you want to return multiple elements from a componenet, you need to use a fragment which is the empty tag
  // return (
  //   <>
  //     <NewTodoForm addTodo={addTodo}/>
  //     <h1 className="header">Todo List</h1>
  //     <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  //   </>
  // )
}


