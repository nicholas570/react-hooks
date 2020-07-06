import React, { useContext } from 'react';

import { UserContext, CatContext } from '../components/UseContextHook';

function ComponentC() {
  const user = useContext(UserContext);
  const cat = useContext(CatContext);
  return (
    <div>
      {user} + {cat}{' '}
    </div>
  );
}

export default ComponentC;
