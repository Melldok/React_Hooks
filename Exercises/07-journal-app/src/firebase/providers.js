
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth'
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

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL} = resp.user;
        console.log(resp)
       
        await updateProfile( FirebaseAuth.currentUser, { displayName } );

        return {
            ok: true,
            uid, photoURL, email, displayName
        }
        
    } catch (error) {
        console.log(error)
        return { ok: false, errorMessage: error.message}
    }
}

