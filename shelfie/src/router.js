import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Shelves from './components/Shelves/Shelves.js';
import Shelfbins from './components/Shelfbins/Shelfbins.js';
import Bin from './components/Bin/Bin.js';
import Newbin from './components/Newbin/Newbin.js';

export default (
  <Switch>
    <Route path="/" component={Shelves} exact />
    <Route path="/shelf/:id" component={Shelfbins} />
    <Route path="/bin/:id" component={Bin} />
    <Route path="/bin/new/:id" component={Newbin} />
  </Switch>
)
