import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/nav.css';
import './css/animations.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
