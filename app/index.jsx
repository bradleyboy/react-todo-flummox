import React from 'react';
import FluxComponent from 'flummox/component'
import Application from './Application';
import TodoFlux from './Application/Flux/TodoFlux';

const flux = new TodoFlux();

React.render(
  <FluxComponent
    flux={flux}
    render={() => <Application />} />, document.getElementById('app'));
