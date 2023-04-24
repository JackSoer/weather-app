import React from 'react';
import './FilteredResult.scss';

const FilteredResults = ({ resultName, setLocation, setSearchInputIsOpen }) => {
  const handleClick = () => {
    setLocation(resultName);
    setSearchInputIsOpen(false);
  };

  return (
    <option
      onClick={handleClick}
      className="filtered-result"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleClick();
      }}
    >
      {resultName}
    </option>
  );
};

export default FilteredResults;
