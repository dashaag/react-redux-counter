import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../actions";

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const isLoggedIn = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick = {() => dispatch(increment(5))}> + </button>
            <h1>Counter : {counter}</h1>
            <button onClick = {() => dispatch(decrement(5))}> - </button>

            {isLoggedIn ?  <h2>This text I won't see if I'm not signed in</h2> : ''}
           
        </div>
    )
}

export default Counter;