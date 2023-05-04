import React, { useContext } from 'react';
import './FilteredResults.scss';
import SearchContext from '../../context/SearchContext';

import Error from '../error/Error';
import Loading from '../loading/Loading';
import FilteredResultsFeed from '../filteredResultsFeed/FilteredResultsFeed';

const FilteredResults = () => {
  const { fetchError, isLoading, results, inputValue } =
    useContext(SearchContext);

  const haveResults = results.length > 0 && !isLoading && !fetchError;

  return (
    <>
      {results.length > 0 && !isLoading && !fetchError && (
        <FilteredResultsFeed />
      )}
      {!haveResults && inputValue.length >= 5 && (
        <div className="error-container">
          <Error errorText="This location isn't found" />
        </div>
      )}
      {inputValue.length < 5 && inputValue && !haveResults && (
        <div className="error-container">
          <p className="advice">
            Continue typing the first letters of the location
          </p>
        </div>
      )}
      {fetchError && inputValue && !isLoading && (
        <div className="error-container">
          <Error errorText={fetchError} />
        </div>
      )}
      {isLoading && !fetchError && inputValue && (
        <div className="loading-container">
          <Loading />
        </div>
      )}
    </>
  );
};

export default FilteredResults;
