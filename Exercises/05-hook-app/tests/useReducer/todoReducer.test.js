import { todoReducer } from "../../src/useReducer/todoReducer"



describe('Pruebas en todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false,
    }]

    test('Debe regresar el estado inicial', () => { 

        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);

     });

     test('Debe agregar un todo', () => { 
        
        const action = {
            type: 'Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo',
                done: false,
            }
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
        


      })

    test('Debe eliminar un TODO', () => { 

             
        const action = {
            type: 'Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo',
                done: false,
            }
        }
        const actionDelete = {
            type: 'Delete Todo',
            payload: 2
        }

        

        todoReducer(initialState, action);
        const newState = todoReducer(initialState, actionDelete);
        expect(newState.length).toBe(1);
        

    })

    test('Debe realizar un toggle del TODO', () => { 

                     
        const action = {
            type: 'Toggle Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);

        expect(newState[0].done).toBeTruthy()

        const newState2 = todoReducer(newState, action);
        
        expect(newState2[0].done).toBeFalsy()



     })
 })