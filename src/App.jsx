import { ThemeProvider } from '@emotion/react';
import { Button, CssBaseline, TextField } from '@mui/material';
import React, { useContext } from 'react';
import './App.css';
import FilterByNumbers from './components/FilterByNumbers';
import FiltersDisplay from './components/FiltersDisplay';
import Order from './components/Order';
import TableComp from './components/TableComp';
import context from './context/MyContext';
import starWarsGif from './images/starWars.gif';
import theme from './MUI/theme';
import './styles/FilterByNumbers.css';

function App() {
  const { handleChangeNameInput, handleClickRemoveFilters } = useContext(context);
  document.title = 'Star-Wars';
  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <div className="App">
        <img src={ starWarsGif } alt="star wars gif" />
        <div className="main-content">
          <TextField
            label="Filtrar por nome"
            name="nameFilter"
            id="nameFilter"
            onChange={ handleChangeNameInput }
            data-testid="name-filter"
            InputLabelProps={ { color: 'secondary' } }
            inputProps={ { style: { color: 'white' } } }
            sx={ {
              '& fieldset ': {
                borderColor: 'white',
                color: 'white',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgb(255, 255, 255, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFFF00',
                },
              },
              '& .MuiFormLabel-root:not(.Mui-focused)': {
                color: 'rgb(255,255,255,0.7)',
              },
            } }
          />
          <div
            style={ { display: 'flex',
              marginTop: '30px',
              alignItems: 'center',
              justifyContent: 'center' } }
          >
            <FilterByNumbers />
            <Button
              style={ { margin: '0 2rem' } }
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
          <TableComp />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
