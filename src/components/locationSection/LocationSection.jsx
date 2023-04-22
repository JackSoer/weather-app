import React, { useState } from 'react';
import './LocationSection.scss';

import SearchInput from '../searchInput/SearchInput';

const LocationSection = () => {
  const [searchInputIsOpen, setSearchInputIsOpen] = useState(false);

  return (
    <div className="nav__location-section location-section">
      <img
        src="./images/icons/location.svg"
        alt=""
        className="location-section__location-icon"
      />
      <p className="location-section__name">New York</p>
      <SearchInput searchInputIsOpen={searchInputIsOpen} />
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
