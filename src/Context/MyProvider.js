import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [resultAPI, setResultAPI] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredList, setFilteredList] = useState(resultAPI);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi.dev/api/planets')
      .then((repsonse) => repsonse.json())
      .then((data) => {
        data.results.forEach((planet) => delete planet.residents);
        setResultAPI(data.results);
        setFilteredList(data.results);
        console.log(data.results);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleChangeNameInput = useCallback(({ target }) => {
    const newFilteredList = resultAPI.filter(
      (planet) => planet.name.includes(target.value),
    );
    setFilteredList(newFilteredList);
  }, [resultAPI]);

  const context = useMemo(() => ({
    resultAPI, loading, filteredList, handleChangeNameInput,
  }), [resultAPI, loading, filteredList, handleChangeNameInput]);

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;
