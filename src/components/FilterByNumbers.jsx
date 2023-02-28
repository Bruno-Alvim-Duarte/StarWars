import React, { useContext } from 'react';
import context from '../Context/MyContext';

function FilterByNumbers() {
  const { handleChangeNumberInput, handleClickFilterBtn } = useContext(context);

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
        <option value="surface-_water">surface-_water</option>
      </select>

      <select
        name="comparasionFilter"
        id="comparasionFilter"
        data-testid="comparison-filter"
        onChange={ handleChangeNumberInput }
      >
        <option value="higher">maior que</option>
        <option value="lower">menor que</option>
        <option value="equal">igual a</option>
      </select>
      <input
        type="number"
        name="valueFilter"
        id="valueFilter"
        data-testid="value-filter"
        onChange={ handleChangeNumberInput }
      />
      <button
        data-testid="button-filter"
        onClick={ handleClickFilterBtn }
      >
        Filtrar

      </button>
    </div>
  );
}

export default FilterByNumbers;
