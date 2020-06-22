import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
const feedbackreducer = (state = [], action) => {
    let newState = state;
    if (action.type === 'HOW_FEELING') {
        newState = {
            ...state,
            feeling: action.payload
        }
    }
    if (action.type === 'UNDERSTANDING') {
        newState = {
            ...state,
            understanding: action.payload
        }
    }
    if (action.type === 'SUPPORT') {
        newState = {
            ...state,
            support: action.payload
        }
    }
    if (action.type === 'COMMENTS') {
        newState = {
            ...state,
            comments: action.payload
        }
    }
    return newState
}
const storeInstance = createStore(
    combineReducers({
        feedbackreducer
    })
)
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
