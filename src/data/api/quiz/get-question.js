/* global API_URL */
import fetch from '../fetch'
import { prepareGetParams } from '../helpers'

export default ({ answers }) => fetch(`${API_URL}/questions/single${prepareGetParams({ answers })}`)
