import React, { useContext } from 'react';
import './App.css';
import FilterByNumbers from './components/FilterByNumbers';
import FiltersDisplay from './components/FiltersDisplay';
import Order from './components/Order';
import Table from './components/Table';
import context from './Context/MyContext';
import starWarsGif from './images/starWars.gif';

function App() {
  const { handleChangeNameInput, handleClickRemoveFilters } = useContext(context);

  return (
    <div className="App">
      <img src={ starWarsGif } alt="star wars gif" />
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
      <Order />
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
