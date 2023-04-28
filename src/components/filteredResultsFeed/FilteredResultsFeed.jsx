import React from 'react';
import './FilteredResultsFeed.scss';
import { useContext } from 'react';
import SearchContext from '../../context/SearchContext';

import FilteredResult from '../filteredResult/FilteredResult';

const FilteredResultsFeed = () => {
  const { results } = useContext(SearchContext);

  const getUniqNames = (arr) => {
    const set = new Set();

    arr.forEach((item) => set.add(item.name));

    return Array.from(set);
  };

  return (
    <select
      className={
        results.length
          ? 'filtered-results-feed filtered-results-feed--active'
          : 'filtered-results-feed'
      }
      size={getUniqNames(results).length}
      tabIndex={2}
      multiple={true}
    >
      {getUniqNames(results).map((result) => (
        <FilteredResult resultName={result} key={result} />
      ))}
    </select>
  );
};

export default FilteredResultsFeed;
