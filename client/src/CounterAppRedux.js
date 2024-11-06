import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function CounterAppRedux() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default CounterAppRedux;
