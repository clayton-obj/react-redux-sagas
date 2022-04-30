import { combineReducers } from "redux";
import { userReducer } from "./user";
import { repositoryReducer } from "./repository";

const rootReducer = combineReducers({
  userState: userReducer,
  repositoryState: repositoryReducer,
});

export default rootReducer;
