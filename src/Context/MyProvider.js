import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [resultAPI, setResultAPI] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [column, setColumn] = useState('population');
  const [comparasion, setComparasion] = useState('higher');
  const [valueFilter, setValueFilter] = useState('');

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
    if (comparasion === 'higher') {
      return planet[column] > Number(valueFilter);
    }
    if (comparasion === 'lower') {
      return planet[column] < Number(valueFilter);
    }
    if (comparasion === 'equal') {
      return planet[column] === Number(valueFilter);
    }
    return true;
  });

  const handleChangeNumberInput = useCallback(({ target }) => {
    if (target.id === 'columnFilter') {
      setColumn(target.value);
    }
    if (target.id === 'comparasionFilter') {
      setComparasion(target.value);
    }
    if (target.id === 'valueFilter') {
      setValueFilter(target.value);
    }
  }, []);

  const handleChangeNameInput = useCallback(({ target }) => {
    setSearch(target.value);
  }, []);

  const context = useMemo(() => ({
    resultAPI,
    loading,
    filterByName,
    handleChangeNameInput,
    handleChangeNumberInput,
    filterByNameByNumber,
  }), [resultAPI, loading, filterByName, handleChangeNameInput, handleChangeNumberInput,
    filterByNameByNumber]);

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
