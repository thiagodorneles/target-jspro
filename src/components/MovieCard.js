import MovieDetails from './MovieDetails'

export default class MovieCard {
  constructor ({ id, title, imageUrl }) {
    this.id = id
    this.title = title
    this.imageUrl = imageUrl
  }

  showDetails () {
    const details = new MovieDetails(this.id)
    details.render()
  }

  render () {
    const divMovieCard = document.createElement('div')

    // bind = define qual o contexto/escopo deve estar sendo utilizado quando a função showDetails() for de fato executada
    //        por padrão, o escopo seria quem chamou a função, ou seja, a propria DIV
    divMovieCard.onclick = this.showDetails.bind(this)

    divMovieCard.className = 'movie-card'
    divMovieCard.style.backgroundImage = `url('${this.imageUrl}')`

    const h2TitleMovie = document.createElement('h2')
    h2TitleMovie.innerText = this.title
    divMovieCard.appendChild(h2TitleMovie)

    return divMovieCard
  }
}
