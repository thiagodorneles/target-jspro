import MovieDetails from './MovieDetails'

export default class MovieCard {
  constructor ({ id, title, imageUrl }) {
    this.id = id
    this.title = title
    this.imageUrl = imageUrl
  }

  showDetails () {
    const details = new MovieDetails()
    details.render()
  }

  render () {
    const divMovieCard = document.createElement('div')
    divMovieCard.onclick = this.showDetails
    divMovieCard.className = 'movie-card'
    divMovieCard.style.backgroundImage = `url('${this.imageUrl}')`

    const h2TitleMovie = document.createElement('h2')
    h2TitleMovie.innerText = this.title
    divMovieCard.appendChild(h2TitleMovie)

    return divMovieCard
  }
}
