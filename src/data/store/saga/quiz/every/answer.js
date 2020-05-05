/* global ga, ym */
import { put, call, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'

const generator = function * ({ payload }) {
  try {
    yield put({ type: 'QUIZ.SET_LOADING', payload: { loading: true } })
    const { answer_id, question_id, value } = payload
    if (answer_id, question_id) {
      const answers = yield select(generator.selectors.answers)
      const answersUpdated = answers.concat({ question_id, answer_id })
      yield put({ type: 'QUIZ.SET_ANSWERS', payload: { answers: answersUpdated } })
      ga('send', 'event', 'Filter', `filter_${question_id}_Answer`, null, answer_id);
      ym(62556976, 'reachGoal', `filter_${question_id}_Answer`)
      yield put({ type: '*ITEMS.GET_ITEMS', payload: { answers: answersUpdated } })
    } else {
      yield put({ type: '*ITEMS.GET_ITEMS', payload: { keywords: value } })
    }
    
    
    
    yield put({ type: 'QUIZ.SET_LOADING', payload: { loading: false } })
  } catch (e) {
    console.error(e)
    yield put({ type: 'QUIZ.SET_LOADING', payload: { loading: false } })
  }
}

export default generator
generator.selectors = {
  answers: ({ quiz: { answers } }) => answers
}