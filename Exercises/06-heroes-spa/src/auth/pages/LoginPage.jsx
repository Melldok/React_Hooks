import { Navigate, useNavigate } from "react-router-dom"



export const LoginPage = () => {

  const navigate = useNavigate();

  const handleLogin = ( ) => {
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
