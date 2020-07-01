import React from 'react';
import CounterCustomHook from './CounterCustomHook';
import CounterCustomHook2 from './CounterCustomHook2';

function CountersContainer() {
  return (
    <div>
      <CounterCustomHook />
      <CounterCustomHook2 />
    </div>
  );
}

export default CountersContainer;
