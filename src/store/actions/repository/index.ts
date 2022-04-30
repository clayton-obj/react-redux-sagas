import * as types from "../../types";
export interface RepositoryType {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function getRepositoryRequest(name: string) {
  return {
    type: types.GET_REPOSITORY_REQUEST,
    payload: name,
  };
}
export function getRepositorySuccess(repositories: RepositoryType[]) {
  return {
    type: types.GET_REPOSITORY_SUCCESS,
    payload: repositories,
  };
}
export function getRepositoryFailure() {
  return {
    type: types.GET_REPOSITORY_FAILURE,
  };
}

export function setSelectedRepositoryRequest(idRepository: number) {
  return {
    type: types.SET_SELECTED_REPOSITORY_REQUEST,
    payload: idRepository,
  };
}
export function setSelectedRepositorySuccess(repositories: RepositoryType[]) {
  return {
    type: types.SET_SELECTED_REPOSITORY_SUCCESS,
    payload: repositories,
  };
}
export function setSelectedRepositoryFailure() {
  return {
    type: types.SET_SELECTED_REPOSITORY_FAILURE,
  };
}
