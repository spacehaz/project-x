import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getQuestion } from 'data/api/quiz'
import { formatAnswers } from 'helpers'

const generator = function * ({ payload }) {
  try {
    const { resultsLength, answers } = payload
    yield put({ type: 'QUIZ.SET_LOADING', payload: { loading: true } })
    if (resultsLength != null && resultsLength === 0) {
      yield put({ type: 'QUIZ.SET_QUESTION', payload: { question: { title: 'No results:( Try another request', no_options: true } } })
    } else {
      const answersFormatted = formatAnswers({ answers })
      const { question = {}, success } = yield call(getQuestion, { answers: answersFormatted })
      yield put({ type: 'QUIZ.SET_QUESTION', payload: { question } })
    }
    
    yield put({ type: 'QUIZ.SET_LOADING', payload: { loading: false } })
  } catch (e) {
    console.error(e)
    yield put({ type: 'QUIZ.SET_LOADING', payload: { loading: false } })
  }
}

export default generator