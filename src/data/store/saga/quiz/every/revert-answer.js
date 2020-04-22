import { put, call, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'

const generator = function * ({ payload }) {
  try {
    yield put({ type: 'QUIZ.SET_LOADING', payload: { loading: true } })
    const { question_id } = payload
    console.log({ question_id })
    if (question_id) {
      const answers = yield select(generator.selectors.answers)
      const answersUpdated = answers.filter(answer => {
        if (Number(answer.question_id) === Number(question_id)) { return false }
        return true
      })
      console.log({ answersUpdated })
      yield put({ type: 'QUIZ.SET_ANSWERS', payload: { answers: answersUpdated } })
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