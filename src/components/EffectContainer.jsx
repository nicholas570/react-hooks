import React, { useState } from 'react';
import CompteurEffect from './CompteurEffect';

function Button() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>unMount/mount</button>
      {display && <CompteurEffect />}
    </div>
  );
}

export default Button;
