import user from './user'
import quiz from './quiz'
import items from './items'
import filters from './filters'

function * saga () {
  yield * user()
  yield * quiz()
  yield * items()
  yield * filters()
}

export default saga
