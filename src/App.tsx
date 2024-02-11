import { createEffect, Component, lazy, createComputed, createSignal, onMount} from 'solid-js';
import { Router,Route } from '@solidjs/router';

import Main from './Main';
import Test from './Test'

const App: Component = (props) => {
  return (
    <Router>
      <Route path="/bun-solid/" component={Main}/>
      <Route path="/bun-solid/test" component={Test}/>
    </Router>
  );
};

export default App;
