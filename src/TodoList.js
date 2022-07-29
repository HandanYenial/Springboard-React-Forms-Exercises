import React from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import {useState} from 'react'
import { v4 as uuid } from 'uuid';


function TodoList() {
    const initialTodo = [
        {
        id: uuid(),
        text: "",
        completed: false
      },

        {
        id: uuid(),
        text: "",
        completed: false
        },
    ]

    const [todos, setTodos] = useState(initialTodo);
    const addTodo = (newTodo) =>{
        setTodos(todos =>[...todos, {...newTodo, id: uuid()}])
    }

    const complete = id =>{
        setTodos(todos =>todos.filter( todo => todo.id !== id));
    }
  return (
    <div className= "Todobody">
        <h1 className= "Todo-title"> TodoList </h1>
        {/*Add  the form, so it will display here*/}
        <NewTodoForm addTodo = {addTodo}/>
        {/**Display all todos here */}
        <div>
            {todos.map(({ id, text, completed}) =>
            <Todo 
                key ={id}
                id = {id}
                text = {text}
                completed ={complete}
            />
            )}
        </div>   
    </div>
  );
}

export default TodoList