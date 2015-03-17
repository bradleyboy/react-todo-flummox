describe('TodoList', () => {
  const React = require('react/addons');
  const TestUtils = React.addons.TestUtils;
  const TodoProgress = require('../index.jsx');

  it('renders the progress at 0%', () => {
    const item = TestUtils.renderIntoDocument(
      <TodoProgress todos={[
        {completed: false, text: 'Text'},
        {completed: false, text: 'Text'},
        {completed: false, text: 'Text'}
      ]} progressPercentage={0} />
    );

    const progress = TestUtils.findRenderedDOMComponentWithTag(item, 'div');
    const progressDOM = React.findDOMNode(progress);

    expect(progressDOM.style.width).to.equal('0%');
    expect(progressDOM.className).to.equal('TodoProgress');
  });

  it('renders the progress at 50%', () => {
    const item = TestUtils.renderIntoDocument(
      <TodoProgress todos={[
        {completed: false, text: 'Text'},
        {completed: false, text: 'Text'},
        {completed: true, text: 'Text'},
        {completed: true, text: 'Text'}
      ]} progressPercentage={50} />
    );

    const progress = TestUtils.findRenderedDOMComponentWithTag(item, 'div');
    const progressDOM = React.findDOMNode(progress);

    expect(progressDOM.style.width).to.equal('50%');
    expect(progressDOM.className).to.equal('TodoProgress');
  });

  it('renders the progress at 100%', () => {
    const item = TestUtils.renderIntoDocument(
      <TodoProgress todos={[
        {completed: true, text: 'Text'},
        {completed: true, text: 'Text'},
        {completed: true, text: 'Text'},
        {completed: true, text: 'Text'}
      ]} progressPercentage={100} />
    );

    const progress = TestUtils.findRenderedDOMComponentWithTag(item, 'div');
    const progressDOM = React.findDOMNode(progress);

    expect(progressDOM.style.width).to.equal('100%');
    expect(progressDOM.className).to.equal('TodoProgress TodoProgress--completed');
  });
});
