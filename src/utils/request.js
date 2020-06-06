import axios from 'axios'

const request = axios.create({
  timeout: 5000
})

request.interceptors.request.use()
export default request
