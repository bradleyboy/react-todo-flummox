/*global describe, it, expect*/

import React from 'react/addons';
import TodoList from '../index.jsx';

describe('TodoList', () => {
  const TestUtils = React.addons.TestUtils;

  it('renders a list', () => {

    const item = TestUtils.renderIntoDocument(
      <TodoList todos={[
        {completed: false, text: 'Text'},
        {completed: false, text: 'Text'},
        {completed: false, text: 'Text'},
      ]} />
    );

    const list = TestUtils.findRenderedDOMComponentWithTag(item, 'ul');
    const listDOM = React.findDOMNode(list);

    expect(listDOM.children.length).to.equal(3);
  });
});
