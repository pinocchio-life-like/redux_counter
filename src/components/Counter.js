import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  const toggle = useSelector(state => state.toggle)
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };

  const incrementHandller = () => {
    dispatch({type: 'increment'})
  }

  const decrementHandler = () => {
    dispatch({type: 'decrement'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {toggle && <div>
        <button onClick ={incrementHandller}>Increment</button>
        <button onClick ={() => {
          dispatch({type: 'increase', amount: 5})
        }}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;