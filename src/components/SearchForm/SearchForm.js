import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className="search-form" id='form'>
      <div className="search-form__container">
        <input
          className="search-form__input"
          type="text"
          placeholder="       Фильм"
          required
          name="movie"
          minLength="1"
          maxLength="40"
          id="search-input"
        />
        <button
          className="search-form__button hover"
          type="submit"
        ></button>
        <span className='search-form__divide-line'></span>
        <FilterCheckbox />
      </div>
      
    </form>
  );
}

export default SearchForm;
