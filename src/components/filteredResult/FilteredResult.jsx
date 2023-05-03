import React from 'react';
import './FilteredResult.scss';
import { useContext } from 'react';
import SearchContext from '../../context/SearchContext';
import WeatherContext from '../../context/WeatherContext';

const FilteredResults = ({ resultName }) => {
  const { setSearchInputIsOpen, setInputValue } = useContext(SearchContext);
  const { setLocation, saveLocation } = useContext(WeatherContext);

  const handleClick = () => {
    setLocation(resultName);
    setSearchInputIsOpen(false);
    setInputValue('');

    saveLocation(resultName);
  };

  return (
    <div className="filtered-result" onClick={handleClick}>
      {resultName}
    </div>
  );
};

export default FilteredResults;
