import React, { useState, useEffect, useRef } from 'react';

function UseRefHook() {
  const [state, setState] = useState();
  const input = useRef(0);
  const counter = useRef({ count: 0 });

  useEffect(() => {
    input.current.focus();
  }, []);

  const handleCLick = (e) => {
    counter.current.count++;
    console.log(counter.current.count);
    setState(input.current.value);
  };

  return (
    <div>
      <input type='text' ref={input} />
      <button onClick={handleCLick}>Get the value</button>
      <h3>{state}</h3>
    </div>
  );
}

export default UseRefHook;
