import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

//test imports
import * as AnnotationApiUtil from './util/annotation_api_util'

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
    window.fetchAnnotation = AnnotationApiUtil.fetchAnnotation
    window.fetchAnnotations = AnnotationApiUtil.fetchAnnotations
    window.createAnnotation = AnnotationApiUtil.createAnnotation
    window.updateAnnotation = AnnotationApiUtil.updateAnnotation
    window.deleteAnnotation = AnnotationApiUtil.deleteAnnotation
    window.a = {
        body: 'delete this nephew',
        upvote_count: 100,
        passage_id: 1,
        annotator_id: 1,
    }
    //end tests
    

    ReactDOM.render(<Root store={store} />, root);
});