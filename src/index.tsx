import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainRouter from './router';

import './index.scss';

const app = (
    <Provider store={store}>
        <MainRouter />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));