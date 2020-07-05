import React, { useEffect, useRef } from 'react';

function UseRefHook() {
  const input = useRef(null);
  const counter = useRef({ count: 0 });

  useEffect(() => {
    input.current.focus();
  }, []);

  const handleCLick = (e) => {
    counter.current.count++;
    console.log(input.current.value, counter.current.count);
  };

  return (
    <div>
      <input type='text' ref={input} />
      <button onClick={handleCLick}>Get the value</button>
    </div>
  );
}

export default UseRefHook;
