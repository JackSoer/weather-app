import React from 'react';
import './FilteredResultsFeed.scss';

import FilteredResult from '../filteredResult/FilteredResult';

const FilteredResultsFeed = (props) => {
  const { results, setLocation, setSearchInputIsOpen, setInputValue } = props;

  return (
    <select
      className={
        results.length
          ? 'filtered-results-feed filtered-results-feed--active'
          : 'filtered-results-feed'
      }
      size={results.length}
      tabIndex={2}
      multiple={true}
    >
      {results.map((result) => (
        <FilteredResult
          resultName={result.name}
          setLocation={setLocation}
          setSearchInputIsOpen={setSearchInputIsOpen}
          setInputValue={setInputValue}
          key={result.id}
        />
      ))}
    </select>
  );
};

export default FilteredResultsFeed;
