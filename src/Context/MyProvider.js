import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [resultAPI, setResultAPI] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [numberFilters, setNumberFilters] = useState([]);
  const [order, setOrder] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi.dev/api/planets')
      .then((repsonse) => repsonse.json())
      .then((data) => {
        data.results.forEach((planet) => delete planet.residents);
        setResultAPI(data.results);
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
    return numberFilters.every((numberFilter) => {
      if (numberFilter.comparasion === 'maior que') {
        return Number(planet[numberFilter.column]) > Number(numberFilter.valueFilter);
      }
      if (numberFilter.comparasion === 'menor que') {
        return Number(planet[numberFilter.column]) < Number(numberFilter.valueFilter);
      }
      return Number(planet[numberFilter.column]) === Number(numberFilter.valueFilter);
    });
  });

  const filterByNameByNumberBySort = filterByNameByNumber.sort((planetA, planetB) => {
    const maintainNumber = -1;
    if (planetA[order.column] === 'unknown' && planetB[order.column] !== 'unknown') {
      return 1; // planetA tem 'unknown', coloca no final da lista
    }
    if (planetA[order.column] !== 'unknown' && planetB[order.column] === 'unknown') {
      return maintainNumber; // planetB tem 'unknown', coloca no final da lista
    }
    if (order.sort === 'ASC') {
      return planetA[order.column] - planetB[order.column];
    }
    if (order.sort === 'DESC') {
      return planetB[order.column] - planetA[order.column];
    }
    return 0; // planetA e planetB têm o mesmo valor, não há diferença na ordem
  });

  const handleClickSort = (column, sort) => {
    setOrder({ column, sort });
  };

  const handleClickRemoveFilters = () => {
    setNumberFilters([]);
  };

  const handleClickRemoveFilter = useCallback((filter) => {
    const newNumberFilters = numberFilters.filter(
      (numberFilter) => numberFilter.column !== filter.column,
    );
    setNumberFilters(newNumberFilters);
  }, [numberFilters]);

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
    filterByNameByNumberBySort,
    numberFilters,
    handleChangeNameInput,
    handleClickFilterBtn,
    handleClickRemoveFilters,
    handleClickRemoveFilter,
    handleClickSort,
  }), [resultAPI, loading, filterByName, handleChangeNameInput, handleClickFilterBtn,
    filterByNameByNumber, numberFilters, handleClickRemoveFilter,
    filterByNameByNumberBySort]);

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
