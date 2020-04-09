import { takeEvery } from 'redux-saga/effects'
import getItems from './every/get-items'
import emptyResults from './every/empty-results'

export default function * () {
  yield takeEvery('*ITEMS.GET_ITEMS', getItems)
  yield takeEvery('*ITEMS.EMPTY_RESULTS', emptyResults)
}
