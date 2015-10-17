'use strict';

var Promise = require('bluebird');

var _callbacks = [];
var _promises = [];

var Dispatcher = {

  register: function(callback) {

    _callbacks.push(callback);
    return _callbacks.length - 1;

  },
  dispatch: function(payload) {

    var resolves = [];
    var rejects  = [];

    _promises = _callbacks.map(function(callback, i) {

      return new Promise(function(resolve, reject) {

        resolves[i] = resolve;
        rejects[i] = reject;

      });

    });

    _callbacks.forEach(function(callback, i) {

      Promise.resolve(callback(payload)).then(function() {

        resolves[i](payload);

      }).catch(function(err) {

        rejects[i](err);

      });

    });

    _promises = [];

  }

};

module.exports = Dispatcher;
