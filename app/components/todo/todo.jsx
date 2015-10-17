'use strict';

var TodoActions = require('../../actions/todoActions.js');
var React = require('react');
var Todo = React.createClass({

  render: function() {

    return (

      <li className="todo" key={this.props.key}>
        <button className="todo__button" onClick={this._onRemove}>&#10006;</button>
        <span className="todo__span">{this.props.todo.text}</span>
      </li>

    );

  },
  _onRemove: function() {

    TodoActions.remove(this.props.todo.id);

  }

});

module.exports = Todo;
