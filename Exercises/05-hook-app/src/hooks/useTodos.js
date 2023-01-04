import { useEffect, useReducer } from "react"
import { todoReducer } from "../useReducer/todoReducer"

export const useTodos = () => {


    const init = () => {
        // Try to parse what is inside of todos, if its empty. bring an empty array
        return JSON.parse(localStorage.getItem('todos')) || [];
    }


    const [ todos, dispatchTodo ] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }

        dispatchTodo( action )
    }

    const handleDeleteTodo = (id) => {
        dispatchTodo({
            type: 'Delete Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatchTodo({
            type: 'Toggle Todo',
            payload: id
        })
    }


    const handleUpdateTodo = (id, newTodo) => {
        const action = {
            type: "Update Todo",
            id: id,
            payload: newTodo
        }
        dispatchTodo(action)
      };
    
 



  return{
    todos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    handleUpdateTodo,
    totalTodos : todos.length,
    pendingTodos : todos.filter(todo => !todo.done).length,
  }
}
