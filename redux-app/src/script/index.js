import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { counterReducer } from './store/reducers/counter.reducer';
import * as actionTypes from './store/action/actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const logger = store => next => action =>{

// }

const logger = function(store){
    return function(next){
        return function(action){
            console.log("[LOGGER - STATE]", store.getState())
            console.log("[LOGGER - ACTION]", action)
            return next(action);
        }
    }
}

const updateUI = () => { $("#counter").html(store.getState().counter); }

const store = createStore(counterReducer, 
        composeEnhancers(applyMiddleware(logger, thunk)));

$(document).ready(() => {
    console.log("[INITIAL STATE]" , store.getState());
    $("#counter").html(store.getState().counter);

    store.subscribe(() => {
        console.log("[SUBSCRIPTION]",store.getState());
        updateUI()
    })

    $("#btnIncrement").on("click", () => {
        // store.dispatch({type : "INCREMENT"});
        store.dispatch({type : actionTypes.INCREMENT});
    })

    $("#btnAdd").on("click", () => {
        store.dispatch(actionTypes.addCounter(10))
    })

    $("#btnDecrement").on("click", () => {
        store.dispatch(actionTypes.asyncDecrement());
    })
})