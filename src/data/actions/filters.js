class Filters {
  constructor (actions) {
    this.actions = actions
  }

  getFilters () {
    this.actions.dispatch({ type: '*FILTERS.GET_FILTERS' })
  }

}

export default Filters
