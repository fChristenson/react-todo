'use strict';

var Dispatcher = require('./dispatcher.js');

var AppDispatcher = {

  handeViewAction: function(action) {

    Dispatcher.dispatch({

      source: 'VIEW',
      action: action

    });

  },
  register: Dispatcher.register,

};

module.exports = AppDispatcher;
