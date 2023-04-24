import React from 'react';
import './FilteredResult.scss';

const FilteredResults = ({
  resultName,
  setLocation,
  setSearchInputIsOpen,
  setInputValue,
}) => {
  const handleClick = () => {
    setLocation(resultName);
    setSearchInputIsOpen(false);
    setInputValue('');
  };

  return (
    <option onClick={handleClick} className="filtered-result">
      {resultName}
    </option>
  );
};

export default FilteredResults;
