import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth"

// These routes are only gonna show if the user is logged in, while the public routes are shown to everyone.

export const PrivateRoute = ({ children }) => {

    // Destructuring the context provided, to see if user is logged
    const { logged } = useContext(AuthContext)

    // Destructuring what's needed from the locaton
    const { pathname, search } = useLocation();
    // Concat the two parts of the location (path and query)
    const lastPath = pathname + search;
    //Store last path on localstorage
    localStorage.setItem('lastPath', lastPath);



    console.log(location)

  return (logged)
    ? children : <Navigate to="/login" />
  
}
