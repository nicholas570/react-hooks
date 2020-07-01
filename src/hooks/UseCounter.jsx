import { useState } from 'react';

function UseCounter(initialValue, value) {
  // same logic exported to 2 different components
  const [state, setstate] = useState(initialValue);

  const increment = () => {
    setstate((state) => state + value);
  };
  const decrement = () => {
    setstate((state) => state - value);
  };
  const reset = () => {
    setstate(initialValue);
  };
  return [state, increment, decrement, reset];
}

export default UseCounter;
