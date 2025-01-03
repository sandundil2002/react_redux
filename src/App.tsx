import './App.css'
import {useDispatch, useSelector} from "react-redux";

function App() {

    const {count, toggle} = useSelector(state => state);

    const dispatch = useDispatch();

  return (
    <>
        {toggle && <h1>{count}</h1>}
        <br/>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
        <button onClick={() => dispatch({type: 'TOGGLE'})}>Toggle</button>
    </>
  )
}

export default App
