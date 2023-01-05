import { Link, Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./NavBar"

export const MainApp = () => {
  return (
    <UserProvider>
      {/* UserProvider is our component context provider, we wrapped all its children, so all of them will have access to props */}
        
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
