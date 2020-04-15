import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getFilters } from 'data/api/filters'

const generator = function * () {
  try {
    yield put({ type: 'FILTERS.SET_LOADING', payload: { loading: true } })
    const { data, success } = yield call(getFilters)
    if (success) {
      const initialFilter = data.find(filter => filter.order === 1)
      const initialFiltersFormat = data.map(filter => ({
        ...filter,
        applied: false,
        current: Number(filter.order) === 1
      }))
      yield put({ type: 'FILTERS.SET_FILTERS', payload: { filters: initialFiltersFormat } })
      yield put({ type: '*QUIZ.GET_QUESTION', payload: { filter: initialFilter.title } })
    } else {
      yield put({ type: 'FILTERS.SET_FILTERS', payload: { items: [] } })
    }

    yield put({ type: 'FILTERS.SET_LOADING', payload: { loading: false } })
  } catch (e) {
    console.error(e)
    yield put({ type: 'FILTERS.SET_LOADING', payload: { loading: false } })
  }
}

export default generator