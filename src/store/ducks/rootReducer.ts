import { combineReducers } from "redux";
import { repositoryReducer } from "./repositories";
import { userReducer } from "./users";

const rootReducer = combineReducers({
  userState: userReducer,
  repositoryState: repositoryReducer,
});

export default rootReducer;
