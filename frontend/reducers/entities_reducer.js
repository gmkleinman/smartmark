import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import passagesReducer from "./passages_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  passages: passagesReducer
});

export default entitiesReducer;