import { createContext, useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../data/constans';

const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const inputRef = useRef();

  const [inputValue, setInputValue] = useState('');

  const url = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${inputValue}`;

  const [searchInputIsOpen, setSearchInputIsOpen] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!inputValue) {
      setResults([]);

      return;
    }

    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(url, { cancelToken: source.token });

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
    <SearchContext.Provider
      value={{
        inputRef,
        setSearchInputIsOpen,
        setInputValue,
        fetchError,
        isLoading,
        results,
        searchInputIsOpen,
        inputValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
