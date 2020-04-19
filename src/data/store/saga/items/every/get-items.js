import { put, call, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getItems } from 'data/api/items'
import { formatItem } from 'helpers'
import { formatAnswers } from 'helpers'

const generator = function * ({ payload }) {
  try {
    const { answers, keywords: userKeywords } = payload
    const answersFormatted = formatAnswers({ answers })
    const maxPrice = yield select(generator.selectors.maxPrice)
    yield put({ type: 'ITEMS.SET_LOADING', payload: { loading: true } })
    const { data, success, keywords } = yield call(getItems, { answers: answersFormatted, maxPrice, keywords: userKeywords })
    if (success) {
      const formattedData = data.map(item => formatItem(item))
      const maxPrice = Math.max(...formattedData.reduce((sum , item) => {
        sum = sum.concat(parseFloat(item.price.value))
        return sum
      }, [])) || 500
      console.log({ maxPriceApi: maxPrice })
      yield put({ type: 'ITEMS.SET_MAX_PRICE', payload: { maxPrice } })
      yield put({ type: 'ITEMS.SET_ITEMS', payload: { items: formattedData } })
      if (!userKeywords) {
        yield put({ type: '*QUIZ.GET_QUESTION', payload: { resultsLength: formattedData.length, answers, keywords } })
      }
    } else {
      console.log({ maxPriceApi: 0 })
      yield put({ type: 'ITEMS.SET_MAX_PRICE', payload: { maxPrice: 0 } })
      yield put({ type: 'ITEMS.SET_ITEMS', payload: { items: [] } })
      if (!userKeywords) {
        yield put({ type: '*QUIZ.GET_QUESTION', payload: { resultsLength: 0, answers, keywords } })
      }
    }

    yield put({ type: 'ITEMS.SET_LOADING', payload: { loading: false } })
  } catch (e) {
    console.error(e)
    yield put({ type: 'ITEMS.SET_LOADING', payload: { loading: false } })
  }
}

export default generator
generator.selectors = {
  maxPrice: ({ items: { maxPrice } }) => maxPrice
}
