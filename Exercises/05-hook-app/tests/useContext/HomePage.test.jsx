import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/useContext/context/UserContext";
import { HomePage } from "../../src/useContext/HomePage"



describe('Pruebas en <HomePage/>', () => { 

    const user = {
        id: 1,
        name: 'Robb'
    }
    
    test('Debe mostar el componente sin el usuario', () => { 

        render(
            <UserContext.Provider value={{user:null}}>
                <HomePage/>
            </UserContext.Provider>
            
            );
        
        
        const preTag = screen.getByTestId('pre');
        expect(preTag.innerHTML).toBe('null')
     })
    
     
     test('Debe mostar el componente CON el usuario', () => { 

        render(
            <UserContext.Provider value={{user}}>
                <HomePage/>
            </UserContext.Provider>
            
            );
        
        
        const preTag = screen.getByTestId('pre');
        expect(preTag.innerHTML).toContain(`${user.name}`)
     })


 
 })