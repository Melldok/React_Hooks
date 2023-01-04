import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id : new Date().getTime(),
        description: 'Collect Soul Stone',
        done: false,
    },
    {
        id : new Date().getTime() + 100,
        description: 'Collect Power Stone',
        done: false,
    },
]


export const TodoApp = () => {

    const [ todos, dispatchTodo ] = useReducer(todoReducer, initialState)

    const handleNewTodo = (todo) => {
        console.log({ todo })
    }

  return (
    <>
        <h1>TodoApp: 10, <small>Pending: 2</small> </h1>
        <hr />
        
        <div className="row">
            <div className="col-7">

                <TodoList todos={todos} />

            </div>
            
            <div className="col-5">
          
                <h4>Add TODO</h4>
                <hr />
                <TodoAdd todos={todos} handleNewTodo={handleNewTodo} />
            </div>
        </div>

   
    </>
  )
}
