describe('TodoActions', function() {
  const React = require('react/addons');
  const TestUtils = React.addons.TestUtils;
  const TodoActions = require('../TodoActions.js');

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
