import { all } from 'redux-saga/effects'
import user from './users'

export default function* rootSaga(): Generator<any> {
    return yield all([user])
}