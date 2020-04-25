import Axios from 'axios'

export default class Api {
  getAsPromise (url) {
    return Axios.get(url)
      .then((response) => response.data)
  }
}
