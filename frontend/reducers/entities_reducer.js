import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import passagesReducer from "./passages_reducer";
import annotationsReducer from "./annotations_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  passages: passagesReducer,
  annotations: annotationsReducer,
});

export default entitiesReducer;