const { render, screen } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { AuthContext } = require("../../src/auth/context/AuthContext");
const { AppRouter } = require("../../src/router/AppRouter");



describe('Pruebas en AppRouter', () => { 
    
    test('Debe mostar el login si no está autenticado', () => { 

        const contextValue = {
            logged: false,
        }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={{contextValue}}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        
        );

        screen.debug()
     })
 }) 