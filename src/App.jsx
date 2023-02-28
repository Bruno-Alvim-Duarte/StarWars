import React, { useContext } from 'react';
import './App.css';
import FilterByNumbers from './components/FilterByNumbers';
import FiltersDisplay from './components/FiltersDisplay';
import Table from './components/Table';
import context from './Context/MyContext';

function App() {
  const { handleChangeNameInput, handleClickRemoveFilters } = useContext(context);

  return (
    <div>
      <h1>bla</h1>
      <label htmlFor="nameFilter">
        Nome:
        <input
          type="text"
          name="nameFilter"
          id="nameFilter"
          onChange={ handleChangeNameInput }
          data-testid="name-filter"
        />
      </label>
      <FilterByNumbers />
      <button
        data-testid="button-remove-filters"
        onClick={ handleClickRemoveFilters }
      >
        Remover Filtros

      </button>
      <FiltersDisplay />
      <Table />
    </div>
  );
}

export default App;
