import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { counterReducer } from './store/reducers/counter.reducer';
import { resultReducer } from './store/reducers/result.reducer';
import * as actionTypes from './store/action/actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const logger = store => next => action =>{

// }

let rootReducer = combineReducers({
    ctr : counterReducer,
    res : resultReducer
})

const logger = function (store) {
    return function (next) {
        return function (action) {
            console.log("[LOGGER - STATE]", store.getState())
            console.log("[LOGGER - ACTION]", action)
            return next(action);
        }
    }
}

const updateUI = () => { $("#counter").html(store.getState().ctr.counter); }

const createList = () => {
    const arr = store.getState().res.result;
    if (arr.length) {
        $(".list-group").find("li").remove();
        arr.forEach(el => {
            $(".list-group").append("<li class='list-group-item'>" + el + "</li>");
        })
    }
}

const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(logger, thunk)));

$(document).ready(() => {
    // console.log("[INITIAL STATE]" , store.getState());
    $("#counter").html(store.getState().ctr.counter);

    store.subscribe(() => {
        console.log("[SUBSCRIPTION]", store.getState());
        updateUI()
        createList()
    })

    $("#btnIncrement").on("click", () => {
        // store.dispatch({type : "INCREMENT"});
        store.dispatch({ type: actionTypes.INCREMENT });
    })

    $("#btnAdd").on("click", () => {
        store.dispatch(actionTypes.addCounter(10))
    })

    $("#btnDecrement").on("click", () => {
        store.dispatch(actionTypes.asyncDecrement());
    })

    $("#btnStore").on("click", () => {
        store.dispatch(actionTypes.storeItem(store.getState().ctr.counter));
    })
})