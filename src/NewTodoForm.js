import React from 'react'
import { useState } from "react"

const NewTodoForm({ addTodo }) => {
    const initialTodo = { 
        text:"" , 
        completed: false
    }

    const[todo , setTodo] = useState(initialTodo);
    
    const handleChange =(e) => {
        const{ name, value } = e.target;
        setTodo(todo => ({...todo, [name]: value}));
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        addItem({...todo });
        setTodo(initialTodo);
    }

  return (
    <div>
        <form onSubmit ={handleSubmit}>
            <label htmlFor="todo"> Todo </label>
            <input
                  id = "todo"
                  type = "text"
                  name="name"
                  placeholder = "Todo"
                  value = {todo.name}
                  onChange = {handleChange}
            />
            <button type="submit"> Add Todo </button>
        </form>
    </div>
  )
}

export default NewTodoForm