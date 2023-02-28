import React, { useContext, useState } from 'react';
import context from '../Context/MyContext';

function Order() {
  const [column, setColumn] = useState('population');
  const [sort, setSort] = useState('');

  const { handleClickSort } = useContext(context);

  return (
    <div>
      <select
        name="columnSort"
        id="columnSort"
        data-testid="column-sort"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <label htmlFor="sortRuleASC">
        Ascendente
        <input
          type="radio"
          name="sortRule"
          id="sortRuleASC"
          data-testid="column-sort-input-asc"
          value="ASC"
          onClick={ () => setSort('ASC') }
        />
      </label>
      <label htmlFor="sortRuleDESC">
        Descendente
        <input
          type="radio"
          name="sortRule"
          id="sortRuleDESC"
          data-testid="column-sort-input-desc"
          value="DESC"
          onClick={ () => setSort('DESC') }
        />
      </label>

      <button
        data-testid="column-sort-button"
        onClick={ () => handleClickSort(column, sort) }
      >
        Ordenar

      </button>
    </div>
  );
}

export default Order;
