export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBSTRACT_COUNTER = "SUBSTRACT_COUNTER";

// Action Creators
export const addCounter = (payload) => {
    return {
        type: ADD_COUNTER,
        payload : payload
    }
}

export const decrement = () => {
    return {
        type : DECREMENT
    }
}

// Async Action Creator

export const asyncDecrement = () =>{
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(decrement());
        }, 3000);
    }
}