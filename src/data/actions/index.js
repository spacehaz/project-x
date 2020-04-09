import User from './user'
import Routing from './routing'
import Items from './items'

class Actions {
  constructor (env) {
    this.dispatch = (env.props || env).dispatch
    this.history = (env.props || env).history

    this.routing = new Routing(this)
    this.user = new User(this)
    this.items = new Items(this)
  }
}

export default Actions
