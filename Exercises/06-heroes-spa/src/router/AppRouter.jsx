
import { Route, Routes } from 'react-router-dom'
import { HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth'


import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {
  return (
    <>
      <Routes>

      {/* If the user is logged in, he cant see login page */}
      <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }

       />
        {/* If the user is not logged in, he cant see app page */}
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }
        
        />
 

      </Routes>
    </>
  )
}
