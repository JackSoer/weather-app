import React from 'react';
import { useContext } from 'react';
import WeatherContext from '../../context/WeatherContext';
import SearchContext from '../../context/SearchContext';
import './LocationSection.scss';

import SearchForm from '../searchForm/SearchForm';

const LocationSection = () => {
  const { location } = useContext(WeatherContext);
  const { inputRef, setSearchInputIsOpen, setInputValue, searchInputIsOpen } =
    useContext(SearchContext);

  const handleClick = () => {
    setSearchInputIsOpen(!searchInputIsOpen);
    setInputValue('');

    inputRef.current.focus();
  };

  return (
    <div className="nav__location-section location-section">
      <div
        className={
          searchInputIsOpen
            ? 'location-section__name-box location-section__name-box--non-active'
            : 'location-section__name-box'
        }
      >
        <img
          src="./images/icons/location.svg"
          alt=""
          className="location-section__location-icon"
        />
        <h1 className="location-section__name">{location}</h1>
      </div>
      <SearchForm />
      <button
        className="location-section__search-btn"
        aria-label="search"
        onClick={handleClick}
      >
        <img
          src="./images/icons/search.svg"
          alt=""
          className="location-section__search-icon"
        />
      </button>
    </div>
  );
};

export default LocationSection;
