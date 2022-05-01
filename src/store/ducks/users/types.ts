export enum UserActionTypes {
  GET_USER_REQUEST = "GET_USER_REQUEST",
  GET_USER_SUCCESS = "GET_USER_SUCCESS",
  GET_USER_FAILURE = "GET_USER_FAILURE",
}

export interface UserType {
  name: string;
  avatar_url: string;
}

export interface UsersStateType {
  user: UserType;
  loading: boolean;
  error: boolean;
}