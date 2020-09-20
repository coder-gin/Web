import axios from './http'

function get (url) {
  return function (params = {}) {
    return axios.get(url, {
      params
    })
  }
}

export { get }