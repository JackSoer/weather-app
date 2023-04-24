import React, { useState } from 'react';
import './SearchForm.scss';

import FilteredResults from '../filteredResults/FilteredResults';

const SearchInput = ({
  searchInputIsOpen,
  setLocation,
  setSearchInputIsOpen,
  API_KEY,
}) => {
  const [inputValue, setInputValue] = useState('');

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
        />
        <label htmlFor="search" className="search-form__search-label">
          Enter your city or town.
        </label>
        <FilteredResults
          inputValue={inputValue}
          API_KEY={API_KEY}
          setLocation={setLocation}
          setSearchInputIsOpen={setSearchInputIsOpen}
          setInputValue={setInputValue}
        />
      </div>
    </form>
  );
};

export default SearchInput;
