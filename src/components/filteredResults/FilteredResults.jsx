import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FilteredResults.scss';

import Error from '../error/Error';
import Loading from '../loading/Loading';
import FilteredResultsFeed from '../filteredResultsFeed/FilteredResultsFeed';

const FilteredResults = (props) => {
  const {
    inputValue,
    API_KEY,
    setLocation,
    setSearchInputIsOpen,
    setInputValue,
  } = props;

  const URL = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${inputValue}`;

  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(URL, { cancelToken: source.token });

        if (isMounted) {
          setResults(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setResults([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData();

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [inputValue]);

  return (
    <>
      {!fetchError && !isLoading && (
        <FilteredResultsFeed
          results={results}
          setLocation={setLocation}
          setSearchInputIsOpen={setSearchInputIsOpen}
          setInputValue={setInputValue}
        />
      )}
      {!results.length && inputValue && !isLoading && (
        <div className="error-container">
          <Error errorText="This location isn't found" />
        </div>
      )}
      {fetchError && inputValue && !isLoading && (
        <div className="error-container">
          <Error errorText={fetchError} />
        </div>
      )}
      {isLoading && !fetchError && (
        <div className="loading-container">
          <Loading />
        </div>
      )}
    </>
  );
};

export default FilteredResults;
