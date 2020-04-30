import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

//test imports
import { receivePassage } from './actions/passage_actions'
import * as PassageApiUtil from './util/passage_api_util'

//end test imports

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //tests
    console.log("Entry file found!");
    window.store = store;
    window.getState = store.getState;
    //end tests
    

    ReactDOM.render(<Root store={store} />, root);
});