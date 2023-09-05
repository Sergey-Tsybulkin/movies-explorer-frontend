import React from "react"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function SavedMovies() {
  return (
    <section className="saved-movies">
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </section>
  )
}

export default SavedMovies