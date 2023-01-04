import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
    
    const [formState, setFormState] = useState(initialForm)
        
        const onInputChange = ( {target} ) => {
        
        const {name, value} = target;

        setFormState({
            ...formState,
            // Addd to the form state all the values of the inputs
            [name] : value
        })
    }

    const onResetForm = () => {

        // Clean form inputs
       setFormState(initialForm)
    }

    
 
 
 
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
