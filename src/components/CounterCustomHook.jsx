import React, { useState } from 'react';
import useCounter from '../hooks/UseCounter';

function CounterCustomHook() {
  const [count, increment, decrement, reset] = useCounter(0, 2);

  const useVisibility = (initial) => {
    const [value, setValue] = useState(initial);
    const toggle = () => {
      setValue((value) => !value);
      console.log(value);
    };
    return [value, toggle];
  };
  const [visibility, setVisibility] = useVisibility(false);

  return (
    <div>
      Afficher le compteur
      <input type='checkbox' onChange={setVisibility} checked={visibility} />
      {visibility && (
        <>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>reset</button>
          <input type='text' value={count} onChange={increment} />
        </>
      )}
    </div>
  );
}

export default CounterCustomHook;
