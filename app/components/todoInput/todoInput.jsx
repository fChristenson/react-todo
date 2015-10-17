'use strict';

var React = require('react');

var TodoInput = React.createClass({

  getInitialState: function() {

    return {

      value: ''

    };

  },
  render: function() {

    return (
      <div className="todo-input-container">
        <input
          className="todo-input-container__input"
          onChange={this._onChange}
          onKeyDown={this._onKeyDown}
          type="text"
          placeholder="Todo..."
          value={this.state.value}
          autoFocus={true} />
        <button className="todo-input-container__button" onClick={this._onClick}>Add</button>
      </div>);

  },
  _onKeyDown: function(event) {

    if(event.keyCode === 13) {

      this._onClick();

    }

  },
  _onClick: function() {

    this.props.onSave(this.state.value);
    this.setState({value: ''});

  },
  _onChange: function(event) {

    this.setState({

      value: event.target.value

    });

  }

});

module.exports = TodoInput;
