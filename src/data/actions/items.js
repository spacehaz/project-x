class Items {
  constructor (actions) {
    this.actions = actions
  }

  getItems ({ keywords }) {
    this.actions.dispatch({ type: '*ITEMS.GET_ITEMS', payload: { keywords } })
  }

  emptyResults () {
    this.actions.dispatch({ type: '*ITEMS.EMPTY_RESULTS' })
  }
}

export default Items
