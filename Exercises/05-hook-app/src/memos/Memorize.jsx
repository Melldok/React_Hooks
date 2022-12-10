import { useCounter } from "../hooks"


export const Memorize = () => {

 const  { counter,increment } = useCounter(10);

  return (

   

    <>
            <h1>counter <small>{counter}</small></h1>
            <hr />

            <button
            className="btn btn-primary"
            onClick={ () => increment() }
            >
        
                
                +  
            </button>
            
    </>
  )
}
