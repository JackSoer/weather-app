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
    <option className="filtered-result" onClick={handleClick}>
      {resultName}
    </option>
  );
};

export default FilteredResults;
