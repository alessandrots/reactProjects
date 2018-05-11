import * as actionTypes from './actions'

const initialState = {
    counter: 0,
    results:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD_5:
            return {
                ...state,
                counter: state.counter + action.val
            }    
        case actionTypes.SUBTRACT_5:
            return {
                ...state,
                counter: state.counter - action.val
            }

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }    
        case actionTypes.DELETE_RESULT:
            //fazendo uma cópia do array results
            // const results_ = [...state.results];
            // const results_ = state.results.filter( (result, index) => index !== id); ou
            const results_ = state.results.filter( (result, index) => result.id !== action.resultElementId);//definido no Counter.js no mapDispatchToProps
            return {
                ...state,
                results: results_
            }    
    }

    // if (action.type === 'INCREMENT') {
    //     return {
    //         ...state,
    //         counter: state.counter + 1
    //     };
    // } else if (action.type === 'DECREMENT') {
    //     return {
    //         ...state,
    //         counter: state.counter - 1
    //     };
    // } else if (action.type === 'ADD_5') {
    //     return {
    //         ...state,
    //         counter: state.counter + action.val
    //     };
    // } else if (action.type === 'SUBTRACT_5') {
    //     return {
    //         ...state,
    //         counter: state.counter - action.val
    //     };
    // }

    return state;
}

export default reducer;