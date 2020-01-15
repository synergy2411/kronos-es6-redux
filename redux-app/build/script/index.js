"use strict";

var _redux = require("redux");

var _counter = require("./store/reducers/counter.reducer");

var store = (0, _redux.createStore)(_counter.counterReducer);
$(document).ready(function () {
  console.log("[INITIAL STATE]", store.getState());
  $("#counter").val(store.getState().counter);
  store.subscribe(function () {
    console.log("[SUBSCRIPTION]", store.getState());
  });
  $("#btnIncrement").on("click", function () {
    store.dispatch({
      type: "INCREMENT"
    });
  });
});