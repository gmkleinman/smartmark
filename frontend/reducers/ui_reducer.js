import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import annoModalReducer from './anno_modal_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
});

export default uiReducer;