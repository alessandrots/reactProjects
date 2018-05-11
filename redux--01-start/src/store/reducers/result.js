import * as actionTypes from '../actions'

const initialState = {
    results:[]
}

const reducer = (state = initialState, action) => {
    console.log('reducer ==> action = ', action);
    switch (action.type) {

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
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

    return state;
}

export default reducer;