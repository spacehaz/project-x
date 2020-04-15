import { takeEvery } from 'redux-saga/effects'
import getFilters from './every/get-filters'

export default function * () {
  yield takeEvery('*FILTERS.GET_FILTERS', getFilters)
}
