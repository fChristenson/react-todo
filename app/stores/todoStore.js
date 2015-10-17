'use strict';

var AppDispatcher = require('../dispatchers/appDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var EVENT = 'change';
var _todos = {};

var id = Date.now();

_todos[id] = {

  id:id,
  isDone: false,
  text: 'Hello world'

};

var create = function(text) {

  var id = Date.now();

  _todos[id] = {

    id: id,
    isDone: false,
    text: text

  };

};

var remove = function(id) {

  delete _todos[id];

};

var TodoStore = {

  getAll: function() {

    return _todos;

  },
  emitChange: function() {

    EventEmitter.prototype.emit(EVENT);

  },
  addChangeListener: function(callback) {

    EventEmitter.prototype.on(EVENT, callback);

  },
  removeChangeListener: function(callback) {

    EventEmitter.prototype.removeListener(EVENT, callback);

  },
  dispatcherIndex: function() {

    var that = this;
    return AppDispatcher.register(function(payload) {

        var action = payload.action;
        var text;

        switch(action.actionType) {

          case 'create':
            text = action.text.trim();
            create(text);
            that.emitChange();
            break;

          case 'remove':
            remove(action.id);
            that.emitChange();
            break;

        }

        return true;

      });

  }

};

TodoStore.dispatcherIndex();

module.exports = TodoStore;
