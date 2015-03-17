describe('Application', () => {
  it('displays the header', () => {
    const React = require('react/addons');
    const Application = require('../index.jsx');
    const TestUtils = React.addons.TestUtils;

    const Flux = require('../Flux/TodoFlux');
    const FluxContainer = require('flummox/component');

    const flux = new Flux();

    const application = TestUtils.renderIntoDocument(
      <FluxContainer
        flux={flux}
        render={() => <Application />} />
    );

    const label = TestUtils.findRenderedDOMComponentWithTag(application, 'h1');
    const labelDOM = React.findDOMNode(label);

    expect(labelDOM.textContent).to.equal('My Todo List');
  });
});
