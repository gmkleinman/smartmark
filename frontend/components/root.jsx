import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'
import App from './app'

const Root = ({ store }) => {
    console.log('At root: store.getState=')
    console.log(store.getState())
    return(
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    );
};

export default Root;