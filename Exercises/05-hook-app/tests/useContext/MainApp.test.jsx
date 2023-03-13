import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { UserProvider } from "../../src/useContext/context/UserProvider"
import { MainApp } from "../../src/useContext/MainApp"



describe('Pruebas en <MainApp></MainApp>', () => { 
    
    test('Debe mostrar el HomePage', () => { 

    
        render(
           <MemoryRouter>
                <MainApp/>
           </MemoryRouter>
        );

        //screen.debug()
        expect(screen.getByText('Home Page')).toBeTruthy();


     })
    test('Debe mostrar el LoginPage', () => { 

    
        render(
           <MemoryRouter initialEntries={['/Login']}>
                <MainApp/>
           </MemoryRouter>
        );

        //screen.debug()
        expect(screen.getByText('Login Page')).toBeTruthy();


     })
 })