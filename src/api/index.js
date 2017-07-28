import http from './http'

export default {
  myRequest: () => http.get('/get').then(response => response.data)
}
