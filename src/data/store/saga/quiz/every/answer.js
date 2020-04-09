import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

const generator = function * ({ payload }) {
  try {
    yield put({ type: 'QUIZ.SET_LOADING', payload: { loading: true } })
    yield put({ type: 'QUIZ.SET_LOADING', payload: { loading: false } })
  } catch (e) {
    console.error(e)
    yield put({ type: 'QUIZ.SET_LOADING', payload: { loading: false } })
  }
}

export default generator