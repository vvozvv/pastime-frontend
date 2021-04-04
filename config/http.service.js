import axios from 'axios'
import {API_URL} from './config'

export const HTTP = axios.create({
  baseURL: `${API_URL}`
})
export default HTTP