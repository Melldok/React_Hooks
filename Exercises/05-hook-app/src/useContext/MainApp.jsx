import { Link, Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./NavBar"

export const MainApp = () => {
  return (
    <UserProvider>
        
        <NavBar/>
        <hr />

        <Routes>
          <Route path="/" element={ <HomePage /> }/>
          <Route path="/About" element={ <AboutPage /> }/>
          <Route path="/Login" element={ <LoginPage /> }/>

          <Route path="/*" element={ <Navigate to="/about"/>} ></Route>
        </Routes>
      
    </UserProvider>
  )
}
