import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { getUserFailure, getUserSuccess,  } from "./actions";
import { UserActionTypes, UserType } from './types';

let userApi: UserType;
const userRequest = async (name: string) => {
  try {
    const request = await fetch(`https://api.github.com/users/${name}`);
    const response = await request.json();
    userApi = response;
  } catch (error) {
    return false;
  }
};

export function* fetchUser(action: { type: string; payload: string }) {
  try {
    yield call(userRequest, action.payload);
    yield put(getUserSuccess(userApi));
  } catch (e) {
    yield put(getUserFailure());
  }
}

export default all([takeLatest(UserActionTypes.GET_USER_REQUEST, fetchUser)])
