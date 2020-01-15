"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _counter = require("./store/reducers/counter.reducer");

var _result = require("./store/reducers/result.reducer");

var actionTypes = _interopRequireWildcard(require("./store/action/actions"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose; // const logger = store => next => action =>{
// }

var rootReducer = (0, _redux.combineReducers)({
  ctr: _counter.counterReducer,
  res: _result.resultReducer
});

var logger = function logger(store) {
  return function (next) {
    return function (action) {
      console.log("[LOGGER - STATE]", store.getState());
      console.log("[LOGGER - ACTION]", action);
      return next(action);
    };
  };
};

var updateUI = function updateUI() {
  $("#counter").html(store.getState().ctr.counter);
};

var createList = function createList() {
  var arr = store.getState().res.result;

  if (arr.length) {
    $(".list-group").find("li").remove();
    arr.forEach(function (el) {
      $(".list-group").append("<li class='list-group-item'>" + el + "</li>");
    });
  }
};

var store = (0, _redux.createStore)(rootReducer, composeEnhancers((0, _redux.applyMiddleware)(logger, _reduxThunk["default"])));
$(document).ready(function () {
  // console.log("[INITIAL STATE]" , store.getState());
  $("#counter").html(store.getState().ctr.counter);
  store.subscribe(function () {
    console.log("[SUBSCRIPTION]", store.getState());
    updateUI();
    createList();
  });
  $("#btnIncrement").on("click", function () {
    // store.dispatch({type : "INCREMENT"});
    store.dispatch({
      type: actionTypes.INCREMENT
    });
  });
  $("#btnAdd").on("click", function () {
    store.dispatch(actionTypes.addCounter(10));
  });
  $("#btnDecrement").on("click", function () {
    store.dispatch(actionTypes.asyncDecrement());
  });
  $("#btnStore").on("click", function () {
    store.dispatch(actionTypes.storeItem(store.getState().ctr.counter));
  });
});