import Category from './Category'

const db = require('./../db.json')

export default class Movies {
  render () {
    const main = document.createElement('main')

    for (const category of db.categories) {
      const categoryComponent = new Category(category.id, category.title, category.movies)

      main.appendChild(categoryComponent.render())
    }

    return main
  }
}
