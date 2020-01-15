"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncDecrement = exports.decrement = exports.addCounter = exports.SUBSTRACT_COUNTER = exports.ADD_COUNTER = exports.DECREMENT = exports.INCREMENT = void 0;
var INCREMENT = "INCREMENT";
exports.INCREMENT = INCREMENT;
var DECREMENT = "DECREMENT";
exports.DECREMENT = DECREMENT;
var ADD_COUNTER = "ADD_COUNTER";
exports.ADD_COUNTER = ADD_COUNTER;
var SUBSTRACT_COUNTER = "SUBSTRACT_COUNTER"; // Action Creators

exports.SUBSTRACT_COUNTER = SUBSTRACT_COUNTER;

var addCounter = function addCounter(payload) {
  return {
    type: ADD_COUNTER,
    payload: payload
  };
};

exports.addCounter = addCounter;

var decrement = function decrement() {
  return {
    type: DECREMENT
  };
}; // Async Action Creator


exports.decrement = decrement;

var asyncDecrement = function asyncDecrement() {
  return function (dispatch, getState) {
    setTimeout(function () {
      dispatch(decrement());
    }, 3000);
  };
};

exports.asyncDecrement = asyncDecrement;