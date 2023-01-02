import { memo, useMemo, useState } from "react";
import { useCounter } from "../hooks"


const heavyStuff = (iterationNumber = 100) => {
  for(let i = 0; i < iterationNumber; i++){
    console.log("here we go")
  }

  return `${ iterationNumber } iterations done`
}


export const MemoHook = () => {

 const  { counter,increment } = useCounter(4000);
 const [show, setShow] = useState(true)
 
 const memorizedValue = useMemo( () => heavyStuff(counter), [counter] )

  return (

   

    <>
            <h1>counter <small>{counter}</small></h1>
            <hr />

            <h4>{ memorizedValue }</h4>

            <button
            className="btn btn-primary"
            onClick={ () => increment() }
            >
               +  
            </button>
            <button
              className="btn btn-primary"
              onClick={ () => setShow( !show ) }

            >
              Show/Hide {JSON.stringify(show)}
            </button>
            
    </>
  )
}
