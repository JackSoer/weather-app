import React from 'react';
import './SearchInput.scss';

const SearchInput = ({ searchInputIsOpen }) => {
  return (
    <>
      <input
        type="text"
        className={
          searchInputIsOpen
            ? 'location-section__search-input location-section__search-input--active'
            : 'location-section__search-input'
        }
        id="search"
      />
      <label htmlFor="search" className="location-section__search-label">
        Enter your city or town.
      </label>
    </>
  );
};

export default SearchInput;
