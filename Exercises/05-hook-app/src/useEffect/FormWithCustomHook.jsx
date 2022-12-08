import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";



export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',

    })

    // const { username, email, password } = formState;

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

    <h1>Simple Form with custom hook</h1>
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

    <input 
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
    />

    <button onClick={onResetForm} className="btn btn-primary mt-4">Delete</button>

    </>
  )
}
