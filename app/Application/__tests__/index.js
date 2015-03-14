describe('Application', function() {
  it('displays the header', function() {
    var React = require('react/addons');
    var Application = require('../index.jsx');
    var TestUtils = React.addons.TestUtils;
    var Flux = require('../Flux/TodoFlux');
    var FluxContainer = require('flummox/component');
    var flux = new Flux();

    var application = TestUtils.renderIntoDocument(
      <FluxContainer
        flux={flux}
        render={() => <Application />} />
    );

    var label = TestUtils.findRenderedDOMComponentWithTag(application, 'h1');
    var labelDOM = React.findDOMNode(label);

    expect(labelDOM.textContent).to.equal('My Todo List');
  });
});
