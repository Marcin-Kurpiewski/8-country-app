import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';


// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <h1>Inicjalizacja projektu</h1>

    </Provider>,

    document.getElementById('root')
);
registerServiceWorker();
