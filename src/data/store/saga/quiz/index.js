import { takeEvery } from 'redux-saga/effects'
import getQuestion from './every/get-question'
import answer from './every/answer'

export default function * () {
  yield takeEvery('*QUIZ.GET_QUESTION', getQuestion)
  yield takeEvery('*QUIZ.ANSWER', answer)
}
