import React from 'react'

const Todo = ({id, text, completed}) => {
    const handleCompleted =() => completed(id);

  return (
    <div>
     <h3> {text} </h3>
     <button onClick={handleCompleted}> Complete </button>
    </div>
  )

  
}

export default Todo;

