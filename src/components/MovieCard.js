export default class MovieCard {
  render () {
    const divMovieCard = document.createElement('div')
    divMovieCard.className = 'movie-card'

    const h2TitleMovie = document.createElement('h2')
    h2TitleMovie.innerText = 'Título do filme'
    divMovieCard.appendChild(h2TitleMovie)

    return divMovieCard
  }
}
