import { Reducer } from "redux";
import { RepositoriesStateType } from "./types";
import { RepositoryActionTypes } from "./types";

const INITIAL_STATE: RepositoriesStateType = {
  repositories: [],
  selectedRepositories: [],
  loading: false,
  error: false,
};

export const repositoryReducer: Reducer<RepositoriesStateType> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case RepositoryActionTypes.GET_REPOSITORY_REQUEST:
      return { ...state, loading: true, error: false };
    case RepositoryActionTypes.GET_REPOSITORY_FAILURE:
      return { ...state, loading: false, error: true };
    case RepositoryActionTypes.GET_REPOSITORY_SUCCESS:
      return {
        ...state,
        repositories: action.payload,
        loading: false,
        error: false,
      };

    case RepositoryActionTypes.SET_SELECTED_REPOSITORY_REQUEST:
      return { ...state, loading: true, error: false };
    case RepositoryActionTypes.SET_SELECTED_REPOSITORY_FAILURE:
      return { ...state, loading: false, error: true };
    case RepositoryActionTypes.SET_SELECTED_REPOSITORY_SUCCESS:
      return {
        ...state,
        selectedRepositories: action.payload,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
