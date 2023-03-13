import React, { useState } from 'react'

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo, onUpdateTodo }) => {

    const [InputState, setInputState] = useState(todo.description)
          
    const onInputChange = ( {target} ) => {
    
    const {name, value} = target;

    setInputState({
        ...InputState,
        // Addd to the form state all the values of the inputs
        [name] : value
    })

  }

  const handleTodoUpdate = () => {
    onUpdateTodo(todo.id, InputState.todoDesc)
  }



  

  return (
    <li className="list-group-item d-flex justify-content-between">

        <input 
          type="text"
          className={`input-group-sm align-self-center ${ (todo.done) ? 'text-decoration-line-through' : ''}`}
          defaultValue={todo.description}
          name="todoDesc"
          style={
            {
              border: "none",
              width: "60%"
            }
          }
          onChange={onInputChange}
         />
         {todo.description}
        <div>
        <button 
        className='btn btn-warning'
        onClick={handleTodoUpdate}
        >
          Update
        </button>
        <button
        className='btn btn-success'
        onClick={ () => onToggleTodo(todo.id) }
        >
          Complete
        </button>
        <button 
          className="btn btn-danger"
          onClick={ () => onDeleteTodo( todo.id ) }
          >Delete
          </button>
    

        </div>


    </li>
  )
}
