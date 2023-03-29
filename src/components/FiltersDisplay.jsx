import React, { useContext } from 'react';
import context from '../context/MyContext';

function FiltersDisplay() {
  const { numberFilters, handleClickRemoveFilter } = useContext(context);
  return (
    <div>
      {numberFilters.map((numberFilter) => (
        <span data-testid="filter" key={ numberFilter.column }>
          {numberFilter.column}
          {' '}
          {numberFilter.comparasion}
          {' '}
          {numberFilter.valueFilter}
          <button onClick={ () => handleClickRemoveFilter(numberFilter) }>Remove</button>
        </span>
      ))}
    </div>
  );
}

export default FiltersDisplay;
