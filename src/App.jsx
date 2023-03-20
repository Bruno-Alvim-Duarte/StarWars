import { ThemeProvider } from '@emotion/react';
import { Button, TextField } from '@mui/material';
import React, { useContext } from 'react';
import './App.css';
import FilterByNumbers from './components/FilterByNumbers';
import FiltersDisplay from './components/FiltersDisplay';
import Order from './components/Order';
import Table from './components/Table';
import context from './Context/MyContext';
import starWarsGif from './images/starWars.gif';
import theme from './MUI/theme';

function App() {
  const { handleChangeNameInput, handleClickRemoveFilters } = useContext(context);

  return (
    <ThemeProvider theme={ theme }>
      <div className="App">
        <img src={ starWarsGif } alt="star wars gif" />
        <div className="main-content">
          <TextField
            label="Nome"
            name="nameFilter"
            id="nameFilter"
            onChange={ handleChangeNameInput }
            data-testid="name-filter"
            InputLabelProps={ { style: { color: 'white' } } }
            sx={ {
              '& fieldset ': {
                borderColor: 'white',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFFF00',
                },
              },
            } }
          />
          <div style={ { display: 'flex', marginTop: '30px', alignItems: 'center' } }>
            <FilterByNumbers />
            <Button
              data-testid="button-remove-filters"
              onClick={ handleClickRemoveFilters }
              color="secondary"
              variant="outlined"
            >
              Remover Filtros

            </Button>
            <Order />
          </div>
          <FiltersDisplay />
          <Table />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
