import React from 'react';
import { useParams } from 'react-router-dom';

function ParamsHook() {
  const { random } = useParams();

  return <div>hello random number {random}</div>;
}

export default ParamsHook;
