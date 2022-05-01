export enum RepositoryActionTypes {
  GET_REPOSITORY_REQUEST = "GET_REPOSITORY_REQUEST",
  GET_REPOSITORY_SUCCESS = "GET_REPOSITORY_SUCCESS",
  GET_REPOSITORY_FAILURE = "GET_REPOSITORY_FAILURE",
  SET_SELECTED_REPOSITORY_REQUEST = "SET_SELECTED_REPOSITORY_REQUEST",
  SET_SELECTED_REPOSITORY_SUCCESS = "SET_SELECTED_REPOSITORY_SUCCESS",
  SET_SELECTED_REPOSITORY_FAILURE = "SET_SELECTED_REPOSITORY_FAILURE",
}


export interface RepositoryType {
  id: number;
  name: string;
  description: string;
  html_url: string;
}


export interface RepositoriesStateType {
  readonly repositories: RepositoryType[];
  readonly selectedRepositories: RepositoryType[];
  readonly loading: boolean;
  readonly error: boolean;
}