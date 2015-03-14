import React from 'react';
import Application from './Application';
import TodoFlux from './Application/Flux/TodoFlux';
import FluxComponent from 'flummox/component'

let flux = new TodoFlux();

React.render(
  <FluxComponent
    flux={flux}
    render={() => <Application />} />, document.getElementById('app'));
