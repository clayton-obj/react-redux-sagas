import { all, call, put, takeLatest, select } from "@redux-saga/core/effects";
import { RootState } from "../..";
import {
  getRepositoryFailure,
  getRepositorySuccess,
  RepositoryType,
  setSelectedRepositoryFailure,
  setSelectedRepositorySuccess,
} from "../../actions";
import * as types from "../../types";

let repositoriesApi: RepositoryType[];
const userRequest = async (name: string) => {
  try {
    const request = await fetch(`https://api.github.com/users/${name}/repos`);
    const response = await request.json();
    repositoriesApi = response;
  } catch (error) {
    return false;
  }
};

export function* fetchRepositories(action: { type: string; payload: string }) {
  try {
    yield call(userRequest, action.payload);
    yield put(getRepositorySuccess(repositoriesApi));
  } catch (e) {
    yield put(getRepositoryFailure());
  }
}

export function* addSelectedRepositories(action: {
  type: string;
  payload: number;
}) {
  try {
    const {
      repositoryState: { repositories, selectedRepositories },
    }: RootState = yield select();
    if (!selectedRepositories.some((repo) => repo.id === action.payload)) {
      const repository = repositories.filter(
        (repo) => repo.id === action.payload
      );
      yield put(
        setSelectedRepositorySuccess([...repository, ...selectedRepositories])
      );
    } else {
      yield put(
        setSelectedRepositorySuccess([
          ...selectedRepositories.filter((repo) => repo.id !== action.payload),
        ])
      );
    }
  } catch (e) {
    yield put(setSelectedRepositoryFailure());
  }
}

export default all([
  takeLatest(types.GET_REPOSITORY_REQUEST, fetchRepositories),
  takeLatest(types.SET_SELECTED_REPOSITORY_REQUEST, addSelectedRepositories),
]);
