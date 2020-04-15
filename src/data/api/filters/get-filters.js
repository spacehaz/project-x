/* global API_URL */
import fetch from '../fetch'
export default () => fetch(`${API_URL}/filters`)
