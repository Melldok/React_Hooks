import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo, onUpdateTodo }) => {
  return (
   
   <ul className="list-group">
    { 
        
        // Todo Item ...
        todos.map( todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              onDeleteTodo={onDeleteTodo}
              onToggleTodo={onToggleTodo}
              onUpdateTodo={onUpdateTodo}
               />
        )) 
    
    }

</ul>
  )
}
