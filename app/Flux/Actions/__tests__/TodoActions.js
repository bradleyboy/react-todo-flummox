/*global describe, it, expect*/

import React from 'react/addons';
import TodoActions from '../TodoActions';

describe('TodoActions', function() {
  const action = new TodoActions();

  it('accepts a string and returns new todo object', () => {
      const result = action.createTodo('Take out trash');

      expect(result.text).to.equal('Take out trash');
      expect(result.completed).to.equal(false);
  });

  it('accepts an index and returns it', () => {
      const result = action.toggleCompleted(5);

      expect(result).to.equal(5);
  });
});
