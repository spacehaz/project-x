class Quiz {
  constructor (actions) {
    this.actions = actions
  }

  getQuestion ({ answers = [] }) {
    this.actions.dispatch({ type: '*QUIZ.GET_QUESTION', payload: { answers } })
  }

  answer ({ answer_id, question_id, value }) {
    this.actions.dispatch({ type: '*QUIZ.ANSWER', payload: { answer_id, question_id, value } })
  }

  revertAnswer ({ question_id }) {
    this.actions.dispatch({ type: '*QUIZ.REVERT_ANSWER', payload: { question_id } })
  }
}

export default Quiz
