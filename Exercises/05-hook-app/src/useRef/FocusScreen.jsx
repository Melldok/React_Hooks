import { useRef } from "react"


export const FocusScreen = () => {

  const inputRef = useRef();

  const onClick = () => {
    //console.log(inputRef)

    inputRef.current.select();
  }


  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input 
          
          ref={inputRef}
          type="text"
          placeholder="Set your name" 
          className="form-control"
          onClick={onClick}
      />

      <button className="btn btn-primary mt-2">
        Set Focus
      </button>
    </>
  )
}
