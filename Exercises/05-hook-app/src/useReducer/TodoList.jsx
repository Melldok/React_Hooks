import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos = [] }) => {
  return (
   
   <ul className="list-group">
        
        { 
            todos.map( (todo, index) => (
                <TodoItem {...todo} key={index}/>
            )) 
        
        }

    </ul>
  )
}
