import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();


  return (

    <>
        <h1>Counter with hook: {counter}</h1>

        <hr />

        <button className='btn btn-primary' onClick={() => increment(2)}>Increment</button>
        <button className='btn btn-primary' onClick={reset}>Reset</button>
        <button className='btn btn-primary' onClick={decrement} >Decrement</button>

    </>


  )
}
