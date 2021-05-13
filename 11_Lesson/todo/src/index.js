import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import index from './store';
import App from './App';
import './index.css';

ReactDOM.render(
    <Provider store={index}>
        <App />
    </Provider>,
    document.getElementById('root')
);
