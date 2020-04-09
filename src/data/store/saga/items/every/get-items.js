import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getItems } from 'data/api/items'
import { formatItem } from 'helpers'
import getQuestion from 'data/store/saga/quiz/every/get-question'

const generator = function * ({ payload }) {
  try {
    yield put({ type: 'ITEMS.SET_LOADING', payload: { loading: true } })
    const { keywords } = payload
    const { data, success } = yield call(getItems, { keywords })
    if (success) {
      const formattedData = data.map(item => formatItem(item))
      yield put({ type: 'ITEMS.SET_ITEMS', payload: { items: formattedData } })
      yield getQuestion({ payload: { resultsLength: formattedData.length } })
    } else {
      yield put({ type: 'ITEMS.SET_ITEMS', payload: { items: [] } })
      yield getQuestion({ payload: { resultsLength: 0 } })
    }

    yield put({ type: 'ITEMS.SET_LOADING', payload: { loading: false } })
  } catch (e) {
    console.error(e)
    yield put({ type: 'ITEMS.SET_LOADING', payload: { loading: false } })
  }
}

export default generator