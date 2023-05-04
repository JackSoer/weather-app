import React, { useContext } from 'react';
import './FilteredResult.scss';
import SearchContext from '../../context/SearchContext';
import WeatherContext from '../../context/WeatherContext';

const FilteredResults = ({ resultName }) => {
  const { setSearchInputIsOpen, setInputValue } = useContext(SearchContext);
  const { setLocation, saveLocation } = useContext(WeatherContext);

  const handleClick = () => {
    setLocation(resultName);
    saveLocation(resultName);
    setSearchInputIsOpen(false);
    setInputValue('');
  };

  return (
    <div className="filtered-result" onClick={handleClick}>
      {resultName}
    </div>
  );
};

export default FilteredResults;
