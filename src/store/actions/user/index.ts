import * as types from "../../types";

export interface UserType {
  name: string;
  avatar_url: string;
}

export function getUserRequest(name: string) {
  return {
    type: types.GET_USER_REQUEST,
    payload: name,
  };
}
export function getUserSuccess(user: UserType) {
  return {
    type: types.GET_USER_SUCCESS,
    payload: user,
  };
}
export function getUserFailure() {
  return {
    type: types.GET_USER_FAILURE,
  };
}
