const redux = require("redux");

const initialState = {
    counter: 0,
    result: []
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type === "DECREMENT") {
        return {
            ...state,
            counter: state.counter - 1
        }
    }else if(action.type ==="ADD_COUNTER"){
        return {
            ...state,
            counter : state.counter + action.payload
        }
    } else {
        return state;
    }

}

// Store
const store = redux.createStore(rootReducer);

// Subscribe
store.subscribe(() => {
    console.log("[SUBSCRIBE]", store.getState());
})

// Action
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "ADD_COUNTER", payload : 10 });
