import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getItems } from 'data/api/items'
import { formatItem } from 'helpers'
import getQuestion from 'data/store/saga/quiz/every/get-question'

const generator = function * () {
  try {
    yield put({ type: 'ITEMS.SET_ITEMS', payload: { items: [] } })
    yield put({ type: 'QUIZ.SET_QUESTION', payload: { question: null } })
  } catch (e) {
    console.error(e)
  }
}

export default generator