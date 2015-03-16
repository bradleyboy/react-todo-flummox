describe('TodoList', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;

  it('renders the progress at 0%', function() {
    var TodoProgress = require('../index.jsx');
    var item = TestUtils.renderIntoDocument(
      <TodoProgress todos={[
        {completed: false, text: 'Text'},
        {completed: false, text: 'Text'},
        {completed: false, text: 'Text'}
      ]} progressPercentage={0} />
    );

    var progress = TestUtils.findRenderedDOMComponentWithTag(item, 'div');
    var progressDOM = React.findDOMNode(progress);

    expect(progressDOM.style.width).to.equal('0%');
    expect(progressDOM.className).to.equal('TodoProgress');
  });

  it('renders the progress at 50%', function() {
    var TodoProgress = require('../index.jsx');
    var item = TestUtils.renderIntoDocument(
      <TodoProgress todos={[
        {completed: false, text: 'Text'},
        {completed: false, text: 'Text'},
        {completed: true, text: 'Text'},
        {completed: true, text: 'Text'}
      ]} progressPercentage={50} />
    );

    var progress = TestUtils.findRenderedDOMComponentWithTag(item, 'div');
    var progressDOM = React.findDOMNode(progress);

    expect(progressDOM.style.width).to.equal('50%');
    expect(progressDOM.className).to.equal('TodoProgress');
  });

  it('renders the progress at 100%', function() {
    var TodoProgress = require('../index.jsx');
    var item = TestUtils.renderIntoDocument(
      <TodoProgress todos={[
        {completed: true, text: 'Text'},
        {completed: true, text: 'Text'},
        {completed: true, text: 'Text'},
        {completed: true, text: 'Text'}
      ]} progressPercentage={100} />
    );

    var progress = TestUtils.findRenderedDOMComponentWithTag(item, 'div');
    var progressDOM = React.findDOMNode(progress);

    expect(progressDOM.style.width).to.equal('100%');
    expect(progressDOM.className).to.equal('TodoProgress TodoProgress--completed');
  });
});
