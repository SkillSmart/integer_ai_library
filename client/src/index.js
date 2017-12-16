import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter.js';
// Redux import
import RootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

// Import Middlewares
import Async from './middlewares/async.js';
const createStoreWithMiddleware = applyMiddleware(
    Async,
    thunk
)(createStore)

// Set up Redux
const store = createStoreWithMiddleware(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
    , document.getElementById('root'));