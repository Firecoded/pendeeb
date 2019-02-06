import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import think from './middleware/think';
import { jwtSignIn } from './actions';
import types from './actions/types';

import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer, {}, applyMiddleware(think));

if(localStorage.getItem('token')){
    store.dispatch({
        type: types.SIGN_IN
    });
    jwtSignIn()(store.dispatch);
}

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>  
     </Provider>, 
    document.querySelector('#root')
);
