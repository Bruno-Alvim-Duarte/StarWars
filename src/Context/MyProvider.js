import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [resultAPI, setResultAPI] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [numberFilters, setNumberFilters] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi.dev/api/planets')
      .then((repsonse) => repsonse.json())
      .then((data) => {
        data.results.forEach((planet) => delete planet.residents);
        setResultAPI(data.results);
        console.log(data.results);
      })
      .finally(() => setLoading(false));
  }, []);

  const filterByName = resultAPI.filter(
    (planet) => planet.name.toLowerCase().includes(search.toLowerCase()),
  );

  const filterByNameByNumber = filterByName.filter((planet) => {
    if (numberFilters.length === 0) {
      return true;
    }
    console.log(numberFilters);
    return numberFilters.every((numberFilter) => {
      if (numberFilter.comparasion === 'maior que') {
        return Number(planet[numberFilter.column]) > Number(numberFilter.valueFilter);
      }
      if (numberFilter.comparasion === 'menor que') {
        return Number(planet[numberFilter.column]) < Number(numberFilter.valueFilter);
      }
      if (numberFilter.comparasion === 'igual a') {
        return Number(planet[numberFilter.column]) === Number(numberFilter.valueFilter);
      }
      return true;
    });
  });

  const handleChangeNameInput = useCallback(({ target }) => {
    setSearch(target.value);
  }, []);

  const handleClickFilterBtn = useCallback((filter) => {
    setNumberFilters([...numberFilters, filter]);
  }, [numberFilters]);

  const context = useMemo(() => ({
    resultAPI,
    loading,
    filterByName,
    filterByNameByNumber,
    handleChangeNameInput,
    handleClickFilterBtn,
  }), [resultAPI, loading, filterByName, handleChangeNameInput, handleClickFilterBtn,
    filterByNameByNumber]);

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
