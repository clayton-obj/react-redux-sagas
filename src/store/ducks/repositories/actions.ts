import { RepositoryActionTypes, RepositoryType } from "./types";

export function getRepositoryRequest(name: string) {
  return {
    type: RepositoryActionTypes.GET_REPOSITORY_REQUEST,
    payload: name,
  };
}
export function getRepositorySuccess(repositories: RepositoryType[]) {
  return {
    type: RepositoryActionTypes.GET_REPOSITORY_SUCCESS,
    payload: repositories,
  };
}
export function getRepositoryFailure() {
  return {
    type: RepositoryActionTypes.GET_REPOSITORY_SUCCESS,
  };
}

export function setSelectedRepositoryRequest(idRepository: number) {
  return {
    type: RepositoryActionTypes.SET_SELECTED_REPOSITORY_REQUEST,
    payload: idRepository,
  };
}
export function setSelectedRepositorySuccess(repositories: RepositoryType[]) {
  return {
    type: RepositoryActionTypes.SET_SELECTED_REPOSITORY_SUCCESS,
    payload: repositories,
  };
}
export function setSelectedRepositoryFailure() {
  return {
    type: RepositoryActionTypes.SET_SELECTED_REPOSITORY_FAILURE,
  };
}
