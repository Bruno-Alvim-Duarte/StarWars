import React, { useContext, useState } from 'react';
import context from '../Context/MyContext';

function FilterByNumbers() {
  const { handleClickFilterBtn } = useContext(context);

  const [column, setColumn] = useState('population');
  const [comparasion, setComparasion] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('0');

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

  return (
    <div>
      <select
        name="columnFilter"
        id="columnFilter"
        data-testid="column-filter"
        onChange={ handleChangeNumberInput }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
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
        onClick={ () => handleClickFilterBtn({ column, comparasion, valueFilter }) }
      >
        Filtrar

      </button>
    </div>
  );
}

export default FilterByNumbers;
