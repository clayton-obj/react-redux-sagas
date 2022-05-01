import { all } from 'redux-saga/effects'
import user from './users/sagas'
import repository from './repositories/sagas'

export default function* rootSaga(): Generator<any> {
    return yield all([user,repository])
}
