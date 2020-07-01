import React, { useState, useEffect } from 'react';

function CompteurEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  // componentDidUpdate (watching for count)
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    const timer = setInterval(() => {
      handleClick();
    }, 1000);

    // componentWillUnMount
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <input type='text' value={name} onChange={handleChange} />
      <button onClick={handleClick}>You clicked {count} times</button>
    </div>
  );
}

export default CompteurEffect;
