import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { init } from './store';
import App from './App';
import logger from 'redux-logger';
import getBaseName from './Utilities/getBaseName';

ReactDOM.render(
    <Provider store={ init(logger).getStore() }>
        <BrowserRouter basename={ getBaseName(window.location.pathname) }>
            <App/>
        </BrowserRouter>
    </Provider>,

    document.getElementById('root')
);
