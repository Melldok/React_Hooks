import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/useContext/context/UserContext"
import { LoginPage } from "../../src/useContext/LoginPage"



describe('Pruebas en <LoginPage></LoginPage>', () => { 
    
    
    test('Debe mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage/>
            </UserContext.Provider>
        )

        
        const preTag = screen.getByTestId('pre');
        expect(preTag.innerHTML).toBe('null')
     })


    test('Debe llamar el setUser cuando se hace click en el botón', () => { 

        const setUserMock = jest.fn()

        render(
            <UserContext.Provider value={{user:null, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        )


        const userButton = screen.getByRole('button')
        fireEvent.click(userButton)
        expect(setUserMock).toHaveBeenCalled()
        expect(setUserMock).toHaveBeenCalledWith({"email": "juan@google.com", "id": 123, "name": "Juan"})
        
       

     })
 })