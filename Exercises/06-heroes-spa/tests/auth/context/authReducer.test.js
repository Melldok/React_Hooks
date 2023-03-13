import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"


describe('Pruebas en AuthReducer', () => { 

    const initialState = {
        logged: false
    }

    test('Debe retornar el estado por defecto', () => { 

        const newState = authReducer(initialState, {})
        expect(newState).toEqual(initialState)
     })

     test('Debe llamar al login, autenticar y establecer el user', () => { 

        const action = {
            type: types.login,
            payload: {
                user : 'Robb'
            }
        }

        const newState = authReducer(initialState, action);
        expect(newState).toEqual({
            logged: true,
            user: action.payload
        })


      })
     test('Debe borrar name del user y poner logged en false', () => { 

        const action = {
            type: types.logout,
        }

        const newState = authReducer(initialState, action);
        expect(newState).toEqual({
            logged: false,
        })


      })
 })