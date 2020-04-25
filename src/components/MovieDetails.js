import { render } from 'preact'
import { html } from 'htm/preact'

import Api from './../services/api'

export default class MovieDetails {
  constructor (movieId) {
    this.movieId = movieId
  }

  closeDetails () {
    // document.querySelector('#movie-details').innerHTML = ''

    render(null, document.querySelector('#movie-details'))
  }

  render () {
    const api = new Api()

    api.getAsPromise('http://localhost:3000/movies/' + this.movieId)
      .then((movie) => {
        const content = html`<aside class="movie-details">
          <button onclick="${this.closeDetails}">Fechar</button>

          <h1>Detalhes do filme</h1>
          <h2>${movie.title}</h2>
          <img class="movie-image" src="${movie.imageUrl}" />
          <p>Ano: ${movie.year}</p>
          <p>Diretor: ${movie.director}</p>
          <p>Gênero: ${movie.gender}</p>
          <p>Faixa etária: ${movie.rate}</p>
          <p>${movie.synopsis}</p>
          <hr />

          <p>${movie.actors[0].name}</p>
          <img class="actor-picture" src="${movie.actors[0].picture}" />
        </aside>`

        render(content, document.querySelector('#movie-details'))
      })
  }
}
