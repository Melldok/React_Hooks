import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth"

// These routes are only gonna show if the user is logged in, while the public routes are shown to everyone.

export const PublicRoute = ({children}) => {

    // Destructuring the context provided, to see if user is logged
    const { logged } = useContext(AuthContext)

  return (!logged)
    ? children : <Navigate to="/marvel" />
  
}
