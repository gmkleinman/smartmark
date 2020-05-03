import { RECEIVE_ANNOTATIONS, RECEIVE_ANNOTATION, REMOVE_ANNOTATION } from '../actions/annotation_actions'

const annotationsReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ANNOTATIONS:
            return action.annotations;
        case RECEIVE_ANNOTATION:
            newState[action.annotation.id] = action.annotation;
            return newState;
        case REMOVE_ANNOTATION:
            delete newState[action.annotationId]
            return newState;
        default:
            return state;
    }
};

export default annotationsReducer;
