'use strict';

var TodoStore = require('../../stores/todoStore.js');
var React = require('react');
var Todo = require('../todo/todo.jsx');
var TodoInput = require('../todoInput/todoInput.jsx');
var TodoActions = require('../../actions/todoActions.js');
var TodoList = React.createClass({

  getInitialState: function() {

    return {todos: TodoStore.getAll()};

  },
  componentDidMount: function() {

    TodoStore.addChangeListener(this._onChange);

  },
  componentWillUnmount: function() {

    TodoStore.removeChangeListener(this._onChange);

  },
  _onChange: function() {

    this.setState(TodoStore.getAll());

  },
  render: function() {

    var that = this;
    var keys = Object.keys(this.state.todos);
    var list = keys.map(function(key) {

      return that.state.todos[key];

    });

    var todos = list.map(function(todo) {

      return (<Todo todo={todo} key={todo.id}/>);

    });

    return (
      <div>
        <ul className="todo-list">
          {todos}
        </ul>
        <TodoInput onSave={TodoActions.create} />
      </div>
    );

  }

});

module.exports = TodoList;
