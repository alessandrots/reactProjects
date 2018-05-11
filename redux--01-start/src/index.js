import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

// const store = createStore(reducer);

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

/*
 Qdo é chamado um evento, tipo click de button, ele vai para os dois reducers.. aí
 aonde bater o action.type é vai ser realização a ação de acordo com o esperado.
*/
const store = createStore(rootReducer);

//provider permite conectar o store à aplicação
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
