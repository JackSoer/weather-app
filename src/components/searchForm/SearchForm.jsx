import React, { useContext } from 'react';
import './SearchForm.scss';
import SearchContext from '../../context/SearchContext';

import FilteredResults from '../filteredResults/FilteredResults';

const SearchForm = () => {
  const { searchInputIsOpen, setInputValue, inputValue, inputRef } =
    useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={
        searchInputIsOpen ? 'search-form search-form--active' : 'search-form'
      }
    >
      <div className="search-form__box">
        <input
          type="text"
          className="search-form__search-input"
          id="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoComplete="off"
          tabIndex={1}
          ref={inputRef}
          placeholder="New York"
        />
        <label htmlFor="search" className="search-form__search-label">
          Enter your city or town.
        </label>
        <FilteredResults />
      </div>
    </form>
  );
};

export default SearchForm;
