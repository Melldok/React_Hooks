import { useState } from "react"


export const TodoAdd = () => {

    const [todo, setTodo] = useState({})

    const handleSubmit = (event) => {
        setTodo(
          [  ...todo,
            {
        
                id : new Date().getTime(),
                description: todoValue.value ,
                done: false,
            }]
        )
    }

    const handleClick = (event) => {
        event.preventDefault();
        console.log(todo)
    }

    console.log(todo)
    

  return (
    <form onSubmit={handleSubmit}>
    <input 
        type="text"
        placeholder="What to do?"
        className="form-control"
        name="todoValue"
     />
     <button 
        type="submit"
        className="btn btn-primary mt-2"
        >
        Add Todo
     </button>
     <button 
        className="btn btn-primary mt-2"
        onClick={handleClick}
        >
        Log todos
     </button>
</form>
  )
}
