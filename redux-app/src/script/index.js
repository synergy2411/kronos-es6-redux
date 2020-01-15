import { createStore } from 'redux';
import { counterReducer } from './store/reducers/counter.reducer';

const store = createStore(counterReducer);

$(document).ready(() => {
    console.log("[INITIAL STATE]" , store.getState());
    $("#counter").html(store.getState().counter);

    store.subscribe(() => {
        console.log("[SUBSCRIPTION]",store.getState());
    })

    $("#btnIncrement").on("click", () => {
        store.dispatch({type : "INCREMENT"});
    })

})