
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPage, HeroesRoutes, MarvelPage } from '../heroes'
import { LoginPage } from '../auth'


import { Navbar } from '../ui'
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
