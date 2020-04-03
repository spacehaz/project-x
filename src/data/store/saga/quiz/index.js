import { takeEvery } from 'redux-saga/effects'
import getQuestion from './every/get-question'

export default function * () {
  yield takeEvery('*QUESTIONS.GET_QUESTION', getQuestion)
}
