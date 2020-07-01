import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const { state } = useLocation();

  return (
    <div>
      {state ? (
        <h1>
          {state.course} {state.lesson}
        </h1>
      ) : (
        <h1>React Hooks</h1>
      )}
    </div>
  );
}

export default Home;
