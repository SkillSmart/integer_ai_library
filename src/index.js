import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter.js';
// Redux import
import RootReducer from './reducers';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

// Set up Redux
const store = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
    , document.getElementById('root'));