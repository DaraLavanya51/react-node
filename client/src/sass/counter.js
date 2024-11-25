import React, { useState } from 'react';
import './counter.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <div className="counter__value">{count}</div>
      <button className="counter__button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="counter__button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;