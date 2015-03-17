describe('TodoList', () => {
  const React = require('react/addons');
  const TestUtils = React.addons.TestUtils;

  it('renders a list', () => {
    const TodoList = require('../index.jsx');
    
    const item = TestUtils.renderIntoDocument(
      <TodoList todos={[
        {completed: false, text: 'Text'},
        {completed: false, text: 'Text'},
        {completed: false, text: 'Text'}
      ]} />
    );

    const list = TestUtils.findRenderedDOMComponentWithTag(item, 'ul');
    const listDOM = React.findDOMNode(list);

    expect(listDOM.children.length).to.equal(3);
  });
});
