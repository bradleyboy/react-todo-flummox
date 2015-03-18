// IMPORTANT: This needs to be first to get around CSS order
// randomeness in webpack.
require('./reset.css');

import React from 'react';
import FluxComponent from 'flummox/component'
import Application from './Application';
import TodoFlux from './Flux/TodoFlux';

const flux = new TodoFlux();

React.render(
  <FluxComponent
    flux={flux}
    render={() => <Application />} />, document.getElementById('app'));
