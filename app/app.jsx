'use strict';

var styles = require('./scss/main.scss');
var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('./components/todoList/todoList.jsx');

ReactDOM.render(
  <TodoList />,
  document.getElementById('example')
);
