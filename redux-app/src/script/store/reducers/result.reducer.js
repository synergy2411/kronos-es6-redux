import * as actionTypes from '../action/actions';

const initialState = {
    result : []
}
export const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_ITEM:{
            const arr = [...state.result];
            
            arr.push(action.payload);
            console.log(arr, state);
            return {
                ...state,
                result : arr
            }
        }
        default:
            return state;
    }
}
