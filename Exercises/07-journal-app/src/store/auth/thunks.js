import { checkingCredentials } from "./"

// Defining a thunk function
export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        //calling the action creation from the Slice using dispatch
        dispatch(checkingCredentials());

    }
}


export const startGoogleSingIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
    }
}