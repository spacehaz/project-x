import user from './user'
import quiz from './quiz'
import items from './items'

function * saga () {
  yield * user()
  yield * quiz()
  yield * items()
}

export default saga
