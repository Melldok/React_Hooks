import { useEffect, useState } from "react"
import { Message } from "./Message";



export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username : '',
        email : ''
    })


    const {username, email} = formState;

    const onInputChange = ( {target} ) => {
        
        const {name, value} = target;

        setFormState({
            ...formState,
            [name] : value
        })
    }

    useEffect(() => {
        //console.log('UseEffect called')
    }, []);

    useEffect(() => {
        //console.log('Form State changed')
    }, [formState]);

    useEffect(() => {
        //console.log('Email changed')
    }, [ email ]);

  return (
    <>

    <h1>Simple Form</h1>
    <hr />

    <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
    
    />

    <input 
        type="email"
        className="form-control mt-2"
        placeholder="email@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
    />

    {
       ( username === 'Robb') && <Message />
    }

    </>
  )
}
