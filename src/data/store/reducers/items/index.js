import reducers from './reducers'

const initialState = {
  items: [],
  loading: false,
  error: null,
  maxPrice: '0$'
}

export default (state = initialState, action = {}) => {
  const newState = { ...state }
  const { type } = action
  const actionMethod = ACTIONS[type]
  if (!actionMethod) return newState

  return actionMethod(newState, action)
}

const ACTIONS = {
  'ITEMS.SET_ITEMS': reducers.setItems,
  'ITEMS.SET_LOADING': reducers.setLoading,
  'ITEMS.SET_ERROR': reducers.setError,
  'ITEMS.SET_MAX_PRICE': reducers.setMaxPrice
}
