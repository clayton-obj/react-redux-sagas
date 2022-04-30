import { all } from 'redux-saga/effects'
import user from './user'
import repository from './repository'

export default function* rootSaga(): Generator<any> {
    return yield all([user,repository])
}