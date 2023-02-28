import React, { useContext, useEffect, useMemo, useState } from 'react';
import context from '../Context/MyContext';

function FilterByNumbers() {
  const { handleClickFilterBtn, numberFilters } = useContext(context);

  const [column, setColumn] = useState('population');
  const [comparasion, setComparasion] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('0');
  const [optionsColumn, setOptionsColumn] = useState([]);

  const handleChangeNumberInput = ({ target }) => {
    if (target.id === 'columnFilter') {
      setColumn(target.value);
    }
    if (target.id === 'comparasionFilter') {
      setComparasion(target.value);
    }
    if (target.id === 'valueFilter') {
      setValueFilter(target.value);
    }
  };

  const options = useMemo(() => (['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']), []);

  useEffect(() => {
    const optionsAbled = options.filter(
      (option) => !numberFilters.some((numberFilter) => numberFilter.column === option),
    );
    setOptionsColumn(optionsAbled);
    setColumn(optionsAbled[0]);
  }, [numberFilters, options]);

  return (
    <div>
      <select
        name="columnFilter"
        id="columnFilter"
        data-testid="column-filter"
        onChange={ handleChangeNumberInput }
      >
        {optionsColumn.map((optionColumn) => (
          <option key={ optionColumn } value={ optionColumn }>{optionColumn}</option>
        ))}
      </select>

      <select
        name="comparasionFilter"
        id="comparasionFilter"
        data-testid="comparison-filter"
        onChange={ handleChangeNumberInput }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="valueFilter"
        id="valueFilter"
        data-testid="value-filter"
        onChange={ handleChangeNumberInput }
        value={ valueFilter }
      />
      <button
        data-testid="button-filter"
        onClick={ async () => {
          handleClickFilterBtn({ column, comparasion, valueFilter });
        } }
      >
        Filtrar

      </button>
    </div>
  );
}

export default FilterByNumbers;
