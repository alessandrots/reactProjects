const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// REDUCER
//definindo um valor default para o state, no caso, o initialState
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        /*
            não se deve fazer
            state.counter++;
            return state;

            então.. copia o estado anterior: ...state
            e sobrescreve a propriedade após o ajuste: counter: state.counter + 1

            NEVER MUTATE ANY DATA.. ALWAYS DO IMMUTABLY.

        */
        return {
            ...state,
            counter: state.counter + 1
        };
    }

    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
}

// STORE
const store = createStore(rootReducer);
console.log(store.getState());

//SUBSCRIPTION
//Tem que registrar antes do DISPATCH
//O subscription é disparado(triggered) qdo um dispatch for chamado.
store.subscribe(() => {
    console.log('[SUBSCRIPTION]', store.getState());
});

// DISPATCHING ACTION
store.dispatch({type: 'INC_COUNTER'}); //fez um incremento aqui
store.dispatch({type: 'ADD_COUNTER', value: 10});//somou + 10 aqui
console.log(store.getState());

