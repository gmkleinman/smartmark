import { RECEIVE_PASSAGE, RECEIVE_PASSAGES } from '../actions/passage_actions';

const passagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PASSAGES:
      return action.passages;
    case RECEIVE_PASSAGE:
      debugger
      return Object.assign({}, state, { [action.passage.id]: action.passage });
    default:
      return state;
  };
};

export default passagesReducer;