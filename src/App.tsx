import './App.css'
import {useDispatch, useSelector} from "react-redux";

function App() {

    const count = useSelector(state => state);

    const dispatch = useDispatch();

  return (
    <>
        {count}
        <br/>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
        <button onClick={() => dispatch({type: 'TOGGLE'})}>Toggle</button>
    </>
  )
}

export default App
