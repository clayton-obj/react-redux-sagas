import { UserActionTypes, UserType } from "./types";

export function getUserRequest(name: string) {
  return {
    type: UserActionTypes.GET_USER_REQUEST,
    payload: name,
  };
}

export function getUserFailure() {
  return {
    type: UserActionTypes.GET_USER_FAILURE,
  };
}

export function getUserSuccess(user: UserType) {
  return {
    type: UserActionTypes.GET_USER_SUCCESS,
    payload: user,
  };
}
