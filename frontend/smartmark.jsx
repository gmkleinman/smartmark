import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

//test imports

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
    window.dispatch = store.dispatch;
    // window.fetchPassages = PassageApiUtil.fetchPassages
    // window.createPassage = PassageApiUtil.createPassage
    // window.fetchPassage = PassageApiUtil.fetchPassage
    // window.updatePassage = PassageApiUtil.updatePassage
    // window.deletePassage = PassageApiUtil.deletePassage
    //end tests
    

    ReactDOM.render(<Root store={store} />, root);
});