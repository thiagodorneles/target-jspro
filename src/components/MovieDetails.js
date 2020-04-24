export default class MovieDetails {
  render () {
    const html = `<aside class="movie-details">
      <h1>Detalhes do filme</h1>
    </aside>`

    document.querySelector('#movie-details').innerHTML = html
  }
}
