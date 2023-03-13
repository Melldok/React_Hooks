import { render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/useReducer/TodoItem";


describe('Pruebas en <TodoItem/>', () => { 


    const todo = {
        id: 1,
        descripcion: 'Piedra del Alma',
        done: false
    };

    
    const onToggleTodoMock = jest.fn();
    const onDeleteTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks())

    
    test('Debe mostrar el Todo pendiente de completar', () => { 

        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} />
            );
        
        const liElement = screen.getByRole('listitem');
        
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
       
        

     })
    test('Debe mostrar el Todo completado', () => { 

        todo.done = true

        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} />
            );
        
       
       
        

     })
 })