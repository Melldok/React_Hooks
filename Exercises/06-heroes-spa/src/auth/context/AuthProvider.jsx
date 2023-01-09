


// Auth provider uses Authcontext to provide the whole app with a context

import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const initialState = {
    logged: false,
}

const init = () => {
  // Provides the init function a user if it exists on the local storage, so we can reload the page and still be logged in
  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged: !!user,
    user: user, 
  }
}


export const AuthProvider = ({ children }) => {

    const [ authState,dispatch ] = useReducer( authReducer, initialState, init)

    const login = ( name = '' ) => {
      //User to log
      const user = { id: 'ABC', name }
      // Type of action with its payload (user data)
      const action = { type: types.login, payload: user }
      // Put the user data into localStorage
      localStorage.setItem('user', JSON.stringify(user))
      
      dispatch(action)
    }

    const logout = () => {
      //clean localStorage
      localStorage.removeItem('user');
      const action = { type: types.logout}
      dispatch(action)
    }


  return (
    <AuthContext.Provider  value={{
      // props
      ...authState,
      // methods
      login,
      logout
    }} >
        {children}
    </AuthContext.Provider>
  )
}
