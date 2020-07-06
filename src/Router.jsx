import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CompteurState from './components/CompteurState';
import EffectContainer from './components/EffectContainer';
import Home from './components/Home';
import DataFetching from './components/DataFetching';
import ParamsHook from './components/ParamsHook';
import CountersContainer from './components/CountersContainer';
import HistoryHook from './components/HistoryHook';
import UseRefHook from './components/UseRefHook';
import UseContextHook from './components/UseContextHook';

export default function Router() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/useState' component={CompteurState} />
        <Route exact path='/useEffect' component={EffectContainer} />
        <Route path='/useEffect/data-fetching' component={DataFetching} />
        <Route path='/useParams/:random' component={ParamsHook} />
        <Route path='/custom-hook' component={CountersContainer} />
        <Route path='/useHistory' component={HistoryHook} />
        <Route path='/useRef' component={UseRefHook} />
        <Route path='/useContext' component={UseContextHook} />
      </Switch>
    </div>
  );
}
