/* global API_URL */
import fetch from '../fetch'
import { prepareGetParams } from '../helpers'

export default ({ keywords }) => {
  return fetch(`${API_URL}/items${prepareGetParams({ keywords, limit: 100 })}`)
}