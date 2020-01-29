import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import reducer from './App/redux/reducer';
import './index.scss';
import App from './App/App';

const rootReducer = combineReducers({
    posts: reducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));