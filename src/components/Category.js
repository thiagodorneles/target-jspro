import MovieCard from './MovieCard'

export default class Category {
  render (categoryTitle) {
    const section = document.createElement('section')

    const h1 = document.createElement('h1')
    h1.innerText = categoryTitle
    section.appendChild(h1)

    const divCarousel = document.createElement('div')
    divCarousel.className = 'carousel'

    const movieCard = new MovieCard()

    divCarousel.appendChild(movieCard.render())

    section.appendChild(divCarousel)

    return section
  }
}
