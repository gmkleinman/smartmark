import { OPEN_NEW_ANNOTATION, CLOSE_NEW_ANNOTATION } from '../actions/anno_modal_actions';

const annoModalReducer = (state = null, action) => {
//   debugger
  switch (action.type) {
    case OPEN_NEW_ANNOTATION:
      return true;
    case CLOSE_NEW_ANNOTATION:
      return null;
    default:
      return state;
  }
}

export default annoModalReducer;