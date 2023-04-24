import React, { useState } from 'react';
import './LocationSection.scss';

import SearchForm from '../searchInput/SearchForm';

const LocationSection = ({ setLocation, location, API_KEY }) => {
  const [searchInputIsOpen, setSearchInputIsOpen] = useState(false);

  return (
    <div className="nav__location-section location-section">
      <img
        src="./images/icons/location.svg"
        alt=""
        className="location-section__location-icon"
      />
      <h1 className="location-section__name">{location}</h1>
      <SearchForm
        searchInputIsOpen={searchInputIsOpen}
        setLocation={setLocation}
        setSearchInputIsOpen={setSearchInputIsOpen}
        API_KEY={API_KEY}
      />
      <button
        className="location-section__search-btn"
        aria-label="search"
        onClick={() => setSearchInputIsOpen(!searchInputIsOpen)}
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
