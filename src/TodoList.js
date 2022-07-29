import React from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

function TodoList() {
  return (
    <div>
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
                completed ={completed}
            />
            )}
        </div>   
    </div>
  );
}

export default TodoList