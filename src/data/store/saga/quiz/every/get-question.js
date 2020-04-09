import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

const generator = function * ({ payload }) {
  try {
    const { resultsLength } = payload
    yield put({ type: 'QUIZ.SET_LOADING', payload: { loading: true } })
    yield delay(1000)
    if (resultsLength === 0) {
      yield put({ type: 'QUIZ.SET_QUESTION', payload: { question: 'No results:( Try another request' } })
    } else {
      yield put({ type: 'QUIZ.SET_QUESTION', payload: { question: 'What kind?' } })
    }
    
    yield put({ type: 'QUIZ.SET_LOADING', payload: { loading: false } })
  } catch (e) {
    console.error(e)
    yield put({ type: 'QUIZ.SET_LOADING', payload: { loading: false } })
  }
}

export default generator