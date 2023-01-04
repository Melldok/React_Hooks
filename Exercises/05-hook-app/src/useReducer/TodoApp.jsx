
import { useTodos } from "../hooks/useTodos"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"





export const TodoApp = () => {


    const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo, handleUpdateTodo, totalTodos, pendingTodos} = useTodos();


  return (
    <>
        <h1>Todo: {totalTodos}, <small>Pending: {pendingTodos}</small> </h1>
        <hr />
        
        <div className="row">
            <div className="col-6">

                <TodoList 
                    todos={todos} 
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
                    onUpdateTodo={handleUpdateTodo}
                     />

            </div>
            
            <div className="col-5">
          
                <h4>Add TODO</h4>
                <hr />
                <TodoAdd 
                    todos={todos} 
                    handleNewTodo={ handleNewTodo } 
                    />
            </div>
        </div>

   
    </>
  )
}
