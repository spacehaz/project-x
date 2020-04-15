import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getItems } from 'data/api/items'
import { formatItem } from 'helpers'
import getQuestion from 'data/store/saga/quiz/every/get-question'
import { formatAnswers } from 'helpers'

const generator = function * ({ payload }) {
  try {
    const { answers } = payload
    const answersFormatted = formatAnswers({ answers })
    yield put({ type: 'ITEMS.SET_LOADING', payload: { loading: true } })
    const { data, success } = yield call(getItems, { answers: answersFormatted })
    if (success) {
      const formattedData = data.map(item => formatItem(item))
      yield put({ type: 'ITEMS.SET_ITEMS', payload: { items: formattedData } })
      yield put({ type: '*QUIZ.GET_QUESTION', payload: { resultsLength: formattedData.length, answers } })
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
