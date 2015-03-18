/*global describe, it, expect*/

import React from 'react/addons';
import TodoListItem from '../index.jsx';

describe('TodoListItem', () => {
  const TestUtils = React.addons.TestUtils;

  const factory = (props = {
      index: 1,
      checked: true,
      text: 'Get the mail',
    }) => {
    return TestUtils.renderIntoDocument(
      <TodoListItem {...props} onChange={() => {}} />
    );
  };

  it('fills the label with the todo text', () => {
    const item = factory();

    const label = TestUtils.findRenderedDOMComponentWithTag(item, 'label');
    const labelDOM = React.findDOMNode(label);

    expect(labelDOM.textContent).to.equal('Get the mail');
  });

  it('applies the ID attributes based on the index', () => {
    const item = factory();

    const checkbox = TestUtils.findRenderedDOMComponentWithTag(item, 'input');
    const label = TestUtils.findRenderedDOMComponentWithTag(item, 'label');
    const checkboxDOM = React.findDOMNode(checkbox);
    const labelDOM = React.findDOMNode(label);

    expect(checkboxDOM.id).to.equal('todolist-item-1');
    expect(labelDOM.getAttribute('for')).to.equal('todolist-item-1');
  });

  it('displays checked for a completed item', () => {
    const item = factory();

    const checkbox = TestUtils.findRenderedDOMComponentWithTag(item, 'input');
    const checkboxDOM = React.findDOMNode(checkbox);

    const listItem = TestUtils.findRenderedDOMComponentWithTag(item, 'li');
    const listItemDOM = React.findDOMNode(listItem);

    expect(checkboxDOM.checked).to.equal(true);
    expect(listItemDOM.className).to.equal('TodoListItem TodoListItem--checked');
  });

  it('displays unchecked for an incomplete item', () => {
    const item = factory({
      index: 1,
      checked: false,
      text: 'Get the mail',
    });

    const checkbox = TestUtils.findRenderedDOMComponentWithTag(item, 'input');
    const checkboxDOM = React.findDOMNode(checkbox);
    const listItem = TestUtils.findRenderedDOMComponentWithTag(item, 'li');
    const listItemDOM = React.findDOMNode(listItem);

    expect(checkboxDOM.checked).to.equal(false);
    expect(listItemDOM.className).to.equal('TodoListItem');
  });
});
