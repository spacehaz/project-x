import reducers from './reducers'

const initialState = {
  filters: [],
  loading: false,
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
  'FILTERS.SET_FILTERS': reducers.setFilters,
  'FILTERS.SET_LOADING': reducers.setLoading,
  'FILTERS.SET_KEYWORDS': reducers.setKeywords
}
