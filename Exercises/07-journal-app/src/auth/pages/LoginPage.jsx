
// We have to change the name of the Link because it has the same as the one from mui, then we can use it
import { Link as RouterLink} from 'react-router-dom'
import { useMemo } from 'react'


import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSingIn } from '../../store/auth'
import { useDispatch, useSelector } from 'react-redux'




export const LoginPage = () => {

  // Selecting what we want from the store 
  const { status } = useSelector(state => state.auth)


 // using the dispatch for our Thunk function
  const dispatch = useDispatch();


  const { email, password, onInputChange } = useForm({
    email: 'robb@google.com',
    password: '123456'
  })


  const isAuthenticating = useMemo(() => status === 'checking', [status]);


 // Form auth
  const onSubmit = ( event ) => {
    event.preventDefault();

    console.log({email,password})
    dispatch( checkingAuthentication() );
  }

  // Google auth
  const onGoogleSingIn = ( ) => {
    console.log('onGoogleSingIn')
    dispatch(startGoogleSingIn());
  }



  return (

    <AuthLayout title='Login'>
          
          <form onSubmit={onSubmit}> 
              <Grid container>
                  <Grid item xs={12} sx={{ mt: 2 }} >
                    <TextField 
                      label="Email" 
                      type="email" 
                      placeholder="email@google.com" 
                      fullWidth
                      name="email"
                      value={email}
                      onChange={ onInputChange } />
                  </Grid>

                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField 
                      label="Password" 
                      type="password" 
                      placeholder="password" 
                      fullWidth
                      name="password"
                      value={password}
                      onChange={ onInputChange }
                       />
                  </Grid>

                  <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} >
                    <Grid item xs={12} sm={ 6 } >
                      <Button
                        disabled={isAuthenticating} 
                        type="submit" 
                        variant="contained" 
                        fullWidth

                        >
                        Login
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={ 6 } >
                      <Button 
                        disabled={isAuthenticating} 
                        variant="contained"
                        fullWidth
                        onClick={onGoogleSingIn}>
                        <Google />
                        <Typography sx={{ ml: 1}} >Google</Typography>
                      </Button>
                    </Grid>
                  </Grid>
                  
                  <Grid container direction="row" justifyContent="end" >

                    {/* This link is coming from mui, and is being rendered as a component from router dom, which is also called link, so we renamed it to RouterLink */}
                    <Link component={RouterLink} color="inherit" to="/auth/register" >
                    Create an account
                    </Link>
                    

                  </Grid>

              </Grid>
            </form>
    </AuthLayout>




    
  )
}
