describe('TodoList', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;

  it('renders a list', function() {
    var TodoList = require('../index.jsx');
    var item = TestUtils.renderIntoDocument(
      <TodoList todos={[
        {completed: false, text: 'Text'},
        {completed: false, text: 'Text'},
        {completed: false, text: 'Text'}
      ]} />
    );

    var list = TestUtils.findRenderedDOMComponentWithTag(item, 'ul');
    var listDOM = React.findDOMNode(list);

    expect(listDOM.children.length).to.equal(3);
  });
});
