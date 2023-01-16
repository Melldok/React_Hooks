
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FirebaseAuth } from './config';


// Creating a new instance of google auth provider

const googleProvider = new GoogleAuthProvider();

// Function to authenticate with google
export const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user

        return{
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }

    
    }catch(error){
        console.log(error)

        return{
            ok: false,
            errorMessage,
        }
    }
}


