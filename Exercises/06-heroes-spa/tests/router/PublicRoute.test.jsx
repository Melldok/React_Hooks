const { render, screen } = require("@testing-library/react")
const { MemoryRouter, Routes, Route } = require("react-router-dom")
const { AuthContext } = require("../../src/auth")
const { PublicRoute } = require("../../src/router/PublicRoute")



describe('pruebas en Pruebas en <PublicRoute></PublicRoute>', () => { 

    test('Debe mostar el children si no está autenticado', () => { 

        const contextValue = {
            logged: false
        }

        render(

            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>

        )

        expect(screen.getByText('Ruta Publica')).toBeTruthy();



     })


     test('Debe navegar si estoy autenticado', () => { 



        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        }

        render(

            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='marvel' element={
                                <PublicRoute>
                                <h1>Ruta Publica</h1>
                                </PublicRoute>
                        } />
                        <Route path='login' element={<h1>Pagina Marvel</h1>} />
                    </Routes>

                </MemoryRouter>
              
            </AuthContext.Provider>
        )

        expect(screen.getByText('Pagina Marvel')).toBeTruthy()

      })
 })