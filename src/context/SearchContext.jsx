import { createContext, useState, useRef, useEffect, useContext } from 'react';
import axios from 'axios';
import WeatherContext from './WeatherContext';

const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const { API_KEY } = useContext(WeatherContext);

  const inputRef = useRef();

  const [searchInputIsOpen, setSearchInputIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const URL = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${inputValue}`;

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
