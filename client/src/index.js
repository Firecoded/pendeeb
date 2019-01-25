import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import think from './middleware/think';

import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer, {}, applyMiddleware(think));

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>  
     </Provider>, 
    document.querySelector('#root')
);
