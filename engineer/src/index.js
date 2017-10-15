import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Flight from './components/Flight/Flight';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Flight />, document.getElementById('root'));
registerServiceWorker();
