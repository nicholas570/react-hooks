import React, { useState } from 'react';

export default function Compteur() {
  const [count, setcount] = useState(0);

  const handleIncrement = (e) => {
    e.preventDefault();
    setcount((count) => count + 1);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    setcount((count) => count - 1);
  };

  return (
    <>
      <input type='text' value={count} />
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}
