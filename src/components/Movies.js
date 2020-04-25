import Category from './Category'
import Api from '../services/api'

export default class Movies {
  render () {
    const main = document.createElement('main')

    const api = new Api()

    api.getAsPromise('http://localhost:3000/categories')
      .then(function (categories) {
        for (const category of categories) {
          const categoryComponent = new Category(category.id, category.title, category.movies)

          main.appendChild(categoryComponent.render())
        }
      })

    return main
  }
}
