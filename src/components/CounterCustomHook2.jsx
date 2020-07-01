import React from 'react';
import useCounter from '../hooks/UseCounter';

function CounterCustomHook2() {
  const [count, increment, decrement, reset] = useCounter(10, 5);
  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
      <input type='text' value={count} onChange={increment} />
    </>
  );
}

export default CounterCustomHook2;
