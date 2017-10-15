import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers.js';
import './index.css';
import App from './App';
import Flight from './components/Flight/Flight';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
