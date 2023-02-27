import React, { useContext } from 'react';
import './App.css';
import Table from './components/Table';
import context from './Context/MyContext';

function App() {
  const { handleChangeNameInput } = useContext(context);

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
      <Table />
    </div>
  );
}

export default App;
