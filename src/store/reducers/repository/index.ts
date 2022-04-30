import { RepositoryType } from "../../actions";
import * as types from "../../types";

interface RepositoryStateType {
  repositories: RepositoryType[];
  selectedRepositories: RepositoryType[];
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE: RepositoryStateType = {
  repositories: [],
  selectedRepositories: [],
  loading: false,
  error: false,
};

export const repositoryReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: RepositoryType[] }
) => {
  switch (action.type) {
    case types.GET_REPOSITORY_REQUEST:
      return { ...state, loading: true, error: false };
    case types.GET_REPOSITORY_FAILURE:
      return { ...state, loading: false, error: true };
    case types.GET_REPOSITORY_SUCCESS:
      return {
        ...state,
        repositories: action.payload,
        loading: false,
        error: false,
      };

    case types.SET_SELECTED_REPOSITORY_REQUEST:
      return { ...state, loading: true, error: false };
    case types.SET_SELECTED_REPOSITORY_FAILURE:
      return { ...state, loading: false, error: true };
    case types.SET_SELECTED_REPOSITORY_SUCCESS:
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
