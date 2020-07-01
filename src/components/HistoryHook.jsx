import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function HistoryHook() {
  const [state, setstate] = useState('how to use useLocation');
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: '/',
      state: { course: 'hooks:', lesson: 'how to use useLocation' },
    });
  };

  const handleChange = (e) => {
    setstate(e.target.value);
  };

  return (
    <>
      <button onClick={handleClick}>Back home</button>;
      <input type='text' value={state} onChange={handleChange} />
    </>
  );
}

export default HistoryHook;
