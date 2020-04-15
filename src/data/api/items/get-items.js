/* global API_URL */
import fetch from '../fetch'
import { prepareGetParams } from '../helpers'

export default ({ answers }) => {
  return fetch(`${API_URL}/items${prepareGetParams({ answers, limit: 100 })}`)
}