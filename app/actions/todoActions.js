'use strict';

var AppDispatcher = require('../dispatchers/appDispatcher.js');

var TodoActions = {

  create: function(text) {

    AppDispatcher.handeViewAction({

      actionType: 'create',
      text: text

    });

  },
  remove: function(id) {

    AppDispatcher.handeViewAction({

      actionType: 'remove',
      id: id

    });

  }

};

module.exports = TodoActions;
