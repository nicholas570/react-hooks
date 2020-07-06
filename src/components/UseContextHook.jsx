import React, { createContext } from 'react';

import ComponentA from '../context components/ComponentA';

export const UserContext = createContext();
export const CatContext = createContext();
const user = 'Nicolas';
const cat = 'balti';

function UseContextHook() {
  return (
    <UserContext.Provider value={user}>
      <CatContext.Provider value={cat}>
        <ComponentA />
      </CatContext.Provider>
    </UserContext.Provider>
  );
}

export default UseContextHook;
