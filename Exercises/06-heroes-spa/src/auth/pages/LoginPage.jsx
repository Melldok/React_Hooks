import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";



export const LoginPage = () => {

  const { login } = useContext( AuthContext )
  const navigate = useNavigate();

  const handleLogin = ( ) => {
    
    //Login with this name
    login('Robb Stark');

    navigate('/', {
      // Replaces the hitoric of the user, so he cant go back to the previous route if he clicks back
      replace: true,

  })
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
          Login
      </button>
    </div>
  )
}
