import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store';
import routes from './routes';


// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';


render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
