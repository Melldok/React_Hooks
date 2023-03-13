import { render, screen } from "@testing-library/react"
import { useTodos } from "../../src/hooks/useTodos"
import { TodoApp } from "../../src/useReducer/TodoApp"


jest.mock('../../src/hooks/useTodos')

describe('Pruebas en TodoApp', () => { 

    useTodos.mockReturnValue({
        todos: [
            {id : 1, description: 'Todo #1', done: false},
            {id : 2, description: 'Todo #2', done: false}
        ],
        totalTodos: 2, 
        pendingTodos: 1,
        handleDeleteTodo: jest.fn, 
        handleToggleTodo: jest.fn, 
        handleNewTodo: jest.fn, 
        handleUpdateTodo : jest.fn, 
        
    });

    test('Debe mostrar el componente correctamente', () => { 

        render(<TodoApp/>);
        //screen.debug();

        
        expect(screen.getByText('Todo #1')).toBeTruthy()
        expect(screen.getByText('Todo #2')).toBeTruthy()
       

     })
 })