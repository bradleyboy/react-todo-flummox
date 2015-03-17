describe('TodoActions', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var TodoActions = require('../TodoActions.js');

  var action = new TodoActions();

  it('accepts a string and returns new todo object', function() {
      var result = action.createTodo('Take out trash');

      expect(result.text).to.equal('Take out trash');
      expect(result.completed).to.equal(false);
  });

  it('accepts an index and returns it', function() {
      var result = action.toggleCompleted(5);

      expect(result).to.equal(5);
  });
});
