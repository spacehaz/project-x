import User from './user'
import Routing from './routing'
import Items from './items'
import Filters from './filters'
import Quiz from './quiz'

class Actions {
  constructor (env) {
    this.dispatch = (env.props || env).dispatch
    this.history = (env.props || env).history

    this.routing = new Routing(this)
    this.user = new User(this)
    this.items = new Items(this)
    this.filters = new Filters(this)
    this.quiz = new Quiz(this)
  }
}

export default Actions
