import Header from './Header'
import Movies from './Movies'

export default class Home {
  render () {
    // header
    const header = new Header()
    const headerHtml = header.render()

    // movies
    const movies = new Movies()
    const moviesHtml = movies.render()

    // atualiza o index.html
    document.querySelector('.targetflix').innerHTML = headerHtml + moviesHtml
  }
}
