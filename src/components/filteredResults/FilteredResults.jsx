import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FilteredResults.scss';

import FilteredResult from '../filteredResult/FilteredResult';

const FilteredResults = ({
  inputValue,
  API_KEY,
  setLocation,
  setSearchInputIsOpen,
}) => {
  const URL = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${inputValue}`;
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
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
    <select
      className={
        results.length
          ? 'filtered-results filtered-results--active'
          : 'filtered-results'
      }
      tabIndex={2}
      size={results.length}
    >
      {results.map((result) => (
        <FilteredResult
          resultName={result.name}
          setLocation={setLocation}
          setSearchInputIsOpen={setSearchInputIsOpen}
        />
      ))}
    </select>
  );
};

export default FilteredResults;
