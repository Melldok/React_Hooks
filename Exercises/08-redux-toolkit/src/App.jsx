
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {increment, decrement, incrementBy} from './store/slices/counter'

function App() {

  const { counter } = useSelector( state => state.counter)
  // Dispatch already knows what state has to use because we are calling it from its slice
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <p>count is {counter}</p>
        <button onClick={() => {dispatch( increment() )}}>
          Increment
        </button>
        <button onClick={() => {dispatch( decrement() )}}>
          Decrement
        </button>
        <button onClick={() => {dispatch( incrementBy(2) )}}>
          Increment by 2
        </button>
      </div>
    </div>
  )
}

export default App
