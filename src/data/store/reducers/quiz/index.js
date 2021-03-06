import reducers from './reducers'

const initialState = {
  questionIndex: 1,
  question: null,
  loading: false,
  answers: [],
  keywords: ''
}

export default (state = initialState, action = {}) => {
  const newState = { ...state }
  const { type } = action
  const actionMethod = ACTIONS[type]
  if (!actionMethod) return newState

  return actionMethod(newState, action)
}

const ACTIONS = {
  'QUIZ.SET_QUESTION_INDEX': reducers.setQuestionIndex,
  'QUIZ.SET_QUESTION': reducers.setQuestion,
  'QUIZ.SET_LOADING': reducers.setLoading,
  'QUIZ.SET_ANSWERS': reducers.setAnswers,
  'QUIZ.SET_KEYWORDS': reducers.setKeywords
}
