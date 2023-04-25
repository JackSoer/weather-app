import React, { useState, useRef } from 'react';
import './LocationSection.scss';

import SearchForm from '../searchInput/SearchForm';

const LocationSection = ({ setLocation, location, API_KEY }) => {
  const inputRef = useRef();

  const [searchInputIsOpen, setSearchInputIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    setSearchInputIsOpen(!searchInputIsOpen);
    setInputValue('');

    inputRef.current.focus();
  };

  return (
    <div className="nav__location-section location-section">
      <div className="location-section__name-box">
        <img
          src="./images/icons/location.svg"
          alt=""
          className="location-section__location-icon"
        />
        <h1 className="location-section__name">{location}</h1>
      </div>
      <SearchForm
        searchInputIsOpen={searchInputIsOpen}
        setLocation={setLocation}
        setSearchInputIsOpen={setSearchInputIsOpen}
        API_KEY={API_KEY}
        inputValue={inputValue}
        setInputValue={setInputValue}
        inputRef={inputRef}
      />
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
