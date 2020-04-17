import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getItems } from 'data/api/items'
import { formatItem } from 'helpers'
import { formatAnswers } from 'helpers'

const generator = function * ({ payload }) {
  try {
    const { answers } = payload
    const answersFormatted = formatAnswers({ answers })
    yield put({ type: 'ITEMS.SET_LOADING', payload: { loading: true } })
    const { data, success, keywords } = yield call(getItems, { answers: answersFormatted })
    if (success) {
      const formattedData = data.map(item => formatItem(item))
      const maxPrice = Math.max(...formattedData.reduce((sum , item) => {
        sum = sum.concat(parseFloat(item.price.__value__))
        return sum
      }, []))
      yield put({ type: 'ITEMS.SET_MAX_PRICE', payload: { maxPrice: `${maxPrice}$` } })
      yield put({ type: 'ITEMS.SET_ITEMS', payload: { items: formattedData } })
      yield put({ type: '*QUIZ.GET_QUESTION', payload: { resultsLength: formattedData.length, answers, keywords } })
    } else {
      yield put({ type: 'ITEMS.SET_MAX_PRICE', payload: { maxPrice: 0 } })
      yield put({ type: 'ITEMS.SET_ITEMS', payload: { items: [] } })
      yield put({ type: '*QUIZ.GET_QUESTION', payload: { resultsLength: 0, answers, keywords } })
    }

    yield put({ type: 'ITEMS.SET_LOADING', payload: { loading: false } })
  } catch (e) {
    console.error(e)
    yield put({ type: 'ITEMS.SET_LOADING', payload: { loading: false } })
  }
}

export default generator
