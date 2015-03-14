describe('TodoListItem', function() {
  var React = require('react/addons');
  var TodoListItem = require('../index.jsx');
  var TestUtils = React.addons.TestUtils;

  var defaultProps = {
    index: 1,
    checked: true,
    text: 'Get the mail',
  };

  var factory = function(props = defaultProps) {
    return TestUtils.renderIntoDocument(
      <TodoListItem {...props} onChange={() => {}} />
    );
  };

  it('fills the label with the todo text', function() {
    var item = factory();

    var label = TestUtils.findRenderedDOMComponentWithTag(item, 'label');
    var labelDOM = React.findDOMNode(label);

    expect(labelDOM.textContent).to.equal('Get the mail');
  });

  it('applies the ID attributes based on the index', function() {
    var item = factory();

    var checkbox = TestUtils.findRenderedDOMComponentWithTag(item, 'input');
    var label = TestUtils.findRenderedDOMComponentWithTag(item, 'label');
    var checkboxDOM = React.findDOMNode(checkbox);
    var labelDOM = React.findDOMNode(label);

    expect(checkboxDOM.id).to.equal('todolist-item-1');
    expect(labelDOM.getAttribute('for')).to.equal('todolist-item-1');
  });

  it('displays checked for a completed item', function() {
    var item = factory();

    var checkbox = TestUtils.findRenderedDOMComponentWithTag(item, 'input');
    var checkboxDOM = React.findDOMNode(checkbox);

    expect(checkboxDOM.checked).to.equal(true);
  });

  it('displays unchecked for an incomplete item', function() {
    var item = factory({
      index: 1,
      checked: false,
      text: 'Get the mail',
    })

    var checkbox = TestUtils.findRenderedDOMComponentWithTag(item, 'input');
    var checkboxDOM = React.findDOMNode(checkbox);

    expect(checkboxDOM.checked).to.equal(false);
  });
});
