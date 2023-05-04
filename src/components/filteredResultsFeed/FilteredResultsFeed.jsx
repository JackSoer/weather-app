import React, { useContext } from 'react';
import './FilteredResultsFeed.scss';
import SearchContext from '../../context/SearchContext';
import getUniqItems from '../../utils/getUniqItems.js';

import FilteredResult from '../filteredResult/FilteredResult';

const FilteredResultsFeed = () => {
  const { results } = useContext(SearchContext);

  return (
    <div
      className={
        results.length
          ? 'filtered-results-feed filtered-results-feed--active'
          : 'filtered-results-feed'
      }
    >
      {getUniqItems(results).map((result) => (
        <FilteredResult resultName={result} key={result} />
      ))}
    </div>
  );
};

export default FilteredResultsFeed;
