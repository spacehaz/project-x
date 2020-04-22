import { takeEvery } from 'redux-saga/effects'
import getQuestion from './every/get-question'
import answer from './every/answer'
import revertAnswer from './every/revert-answer'

export default function * () {
  yield takeEvery('*QUIZ.GET_QUESTION', getQuestion)
  yield takeEvery('*QUIZ.ANSWER', answer)
  yield takeEvery('*QUIZ.REVERT_ANSWER', revertAnswer)
}
