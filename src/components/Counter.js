import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {counterActions} from '../store/store'

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  const toggle = useSelector(state => state.toggle)
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const incrementHandller = () => {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {toggle && <div>
        <button onClick ={incrementHandller}>Increment</button>
        <button onClick ={() => {
          dispatch(counterActions.increase(5))
        }}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;